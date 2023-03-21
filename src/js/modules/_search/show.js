
import {getPageInfo} from "../_config/config";
import uniq from "lodash/uniq";
import {storeGet, storeSet} from "www/modules/_util/store";

//this needs to use require because it is also used by a node app and node doesn't support import
const womInfo = require("../_config/key");

function getUnitName(pageInfo, unitInfo) {
  return pageInfo[unitInfo.pageKey].title;
}

/*
 * Show or hide delete icon in front of search matches
 */
function setUpEditHandler() {
  $(".ui.toggle.edit.checkbox").checkbox({
    onChecked: function() {
      //console.log("checkbox checked");
      $("div.cmi-search-list").addClass("edit");
    },
    onUnchecked: function() {
      //console.log("checkbox unchecked");
      $("div.cmi-search-list").removeClass("edit");
    }
  });
}

function addEditToggle(html) {
  // delete existing checkbox if present
  $(".ui.toggle.edit.checkbox").checkbox("destroy");

  //remove edit class if set
  $("div.cmi-search-list").removeClass("edit");

  return `<button class="ui disabled primary button save-modified-search-list">
            <i class="save outline icon"></i>
            Save Changes
          </button>
          <div class="ui toggle edit checkbox">
            <input type="checkbox" name="public">
            <label>Remove Selected Matches</label>
          </div>
          ${html}`;
}

function makeList(bid, title, pageInfo, matchArray) {
  return `
    <h3>${title[bid]} (${matchArray.length})</h3>
    <div class="ui list">
      ${matchArray.map((m, hidx) => `
        <div class="item">
          <i class="book icon"></i>
          <div class="content">
            <div class="header">
              ${getUnitName(pageInfo, m)} (${m.m.length})
            </div>
            <div class="list">
              ${m.m.map((h, midx) => `
                <div class="item">
                  <i class="search icon"></i>
                  <div class="content">
                    <div class="header">
                      <i data-bid="${bid}" data-m="${midx}" data-h="${hidx}" class="edit-match trash green icon"></i>
                      <a href="${pageInfo[m.pageKey].url}?srch=${h.location}">Paragraph ${h.location.substr(1)}</a>
                    </div>
                    <div class="description">
                      ${h.context}
                    </div>
                  </div>
                  </div> <!-- item -->
              `).join("")}
            </div> <!-- list -->
          </div>
        </div>
      `).join("")}
    </div> <!-- ui list -->
  `;
}

/*
  for a given page, combine all matches into an array
*/
function munge(bookMatches) {
  let keyLength = womInfo.getKeyInfo().keyLength;
  let combined = [];
  let count = 0;

  for (const match of bookMatches) {
    if (!combined[count]) {
      combined[count] = {
        unit: match.unit,
        book: match.book,
        pageKey: match.key.substr(0, keyLength),
        m: [{location: match.location, context: match.context}]
      };
    }
    else if (combined[count].unit !== match.unit) {
      count++;
      combined[count] = {
        unit: match.unit,
        book: match.book,
        pageKey: match.key.substr(0, keyLength),
        m: [{location: match.location, context: match.context}]
      };
    }
    else {
      combined[count].m.push({location: match.location, context: match.context});
    }
  }
  return combined;
}

//get unique pageKeys from query results and 
function getPageKeys(data) {
  let keyLength = womInfo.getKeyInfo().keyLength;
  let keys = data.map(m => m.key.substr(0, keyLength));
  return uniq(keys);
}

export function showSearchResults(data, query) {
  const books = womInfo.getBooks();
  let pageInfoPromises = [];
  //console.log("search results: %o", data);

  //get array of all unique page info - promises
  for (let b = 0; b < books.length; b++) {
    let bid = books[b];
    if (data[bid]) {
      let pageKeys = getPageKeys(data[bid]);
      for (const pageKey of pageKeys) {
        pageInfoPromises.push(getPageInfo(pageKey));
      }
    }
  }

  Promise.all(pageInfoPromises)
    .then((responses) => {
      let html = "";
      let pageInfo = {};
      let titleArray = {};

      //console.log("responses: %o", responses);

      //organize pageInfo
      for (const page of responses) {
        let {bookTitle, title, subTitle, url} = page;

        if (subTitle) {
          title = `${title}: ${subTitle}`;
        }

        pageInfo[page.pageKey] = {title, url}; 

        if (!titleArray[page.bookId]) {
          titleArray[page.bookId] = bookTitle;
        }
      }

      let matches = {};

      //generate html for search hits
      for (let bid of books) {
        if (data[bid]) {
          matches[bid] = munge(data[bid]);
          html += makeList(bid, titleArray, pageInfo, matches[bid]);
        }
      }

      $(".cmi-search-list").html(addEditToggle(html));
      $("#search-results-header").html(`: <em>${query}</em>`);
      setUpEditHandler();

      //save search results to local store
      saveQueryResults(query, data.count, titleArray, pageInfo, matches, data);
    })
    .catch((error) => {
      console.error("Error: %o", error);
    });
}

//save the query result so it can be available until replaced by another query
function saveQueryResults(queryString, matchCount, titleArray, pageInfo, data, originalResult) {
  const books = womInfo.getBooks();
  let keyLength = womInfo.getKeyInfo().keyLength;

  //don't save if there were no matches
  if (matchCount === 0) {
    return;
  }

  //flatten the query result to simplify access by query navigator on transcript pages
  let flatMatches = [];
  for (const bid of books) {
    if (originalResult[bid]) {
      for (const match of originalResult[bid]) {
        let pageKey = match.key.substr(0, keyLength);
        let m = { key: pageKey, url: `/${match.book}/${match.unit}/`, location: match.location};
        flatMatches.push(m);
      }
    }
  }

  //store.set(queryResultName, {
  storeSet("srchResults", {
    query: queryString,
    count: matchCount,
    strict: originalResult.strict,
    titleArray: titleArray,
    pageInfo: pageInfo,
    data: data,
    flat: flatMatches
  });
}

//show saved query result in modal
export function showSavedQuery() {
  const queryResult = storeGet("srchResults");

  if (!queryResult) {
    return;
  }

  const books = womInfo.getBooks();
  let html = "";

  //generate html for search hits
  for (let bid of books) {
    if (queryResult.data[bid]) {
      html += makeList(bid, queryResult.titleArray, queryResult.pageInfo, queryResult.data[bid]);
    }
  }

  $(".cmi-search-list").html(addEditToggle(html));

  //if the result has a uniqueId it's been saved
  if (queryResult.uniqueId) {
    $(".search-message.header").text("Saved Search Result");
    $(".search-message-body").html(`<p>Saved Search <em>${queryResult.query}</em> has ${queryResult.count} matches</p>`);
  }
  else {
    $(".search-message.header").text("Last Search Result");
    $(".search-message-body").html(`<p>Search for <em>${queryResult.query}</em> found ${queryResult.count} matches</p>`);
  }

  $("#search-results-header").html(`: <em>${queryResult.query}</em>`);

  //indicate result has been modified and will be saved when query next changes
  if (queryResult.modified) {
    $(".search.message").addClass("orange");
  }
  //console.log("show search results: strict: %s", queryResult.strict);
  if (queryResult.strict) {
    $(".ui.exact.checkbox").checkbox("check");
  }
  else {
    $(".ui.exact.checkbox").checkbox("uncheck");
  }

  setUpEditHandler();
}


