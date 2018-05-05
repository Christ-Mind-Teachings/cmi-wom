
//import config from "../_config/config";
import {getPageInfo} from "../_config/config";
import uniq from "lodash/uniq";
import store from "store";

//this needs to use require because it is also used by a node app and node doesn't support import
const womInfo = require("../_config/key");
const queryResultName = "query-result-wom";

function getUnitName(pageInfo, unitInfo) {
  return pageInfo[unitInfo.pageKey].title;
}

function makeList(bid, title, pageInfo, matchArray) {
  return `
    <h3>${title[bid]} (${matchArray.length})</h3>
    <div class="ui list">
      ${matchArray.map(m => `
        <div class="item">
          <i class="book icon"></i>
          <div class="content">
            <div class="header">
              ${getUnitName(pageInfo, m)} (${m.m.length})
            </div>
            <div class="list">
              ${m.m.map(h => `
                <div class="item">
                  <i class="search icon"></i>
                  <div class="content">
                    <div class="header">
                      <a href="${pageInfo[m.pageKey].url}?s=show${h.location}">Paragraph ${h.location.substr(2)}</a>
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

      //organize pageInfo
      for (const page of responses) {
        const {bookTitle, title, url} = page;
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
      $(".cmi-search-list").html(html);
      saveQueryResults(query, data.count, titleArray, pageInfo, matches);

    })
    .catch((error) => {
      console.error("Error: %s", error.message);
    });
}

//save the query result
function saveQueryResults(queryString, matchCount, titleArray, pageInfo, data) {
  store.set(queryResultName, {query: queryString, count: matchCount, titleArray: titleArray, pageInfo: pageInfo, data: data});
}

//show saved query result in modal
export function showSavedQuery() {
  const queryResult = store.get(queryResultName);

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
  $(".cmi-search-list").html(html);

  $(".search-message.header").text("Last Search Result");
  $(".search-message-body").html(`<p>Search for <em>${queryResult.query}</em> found ${queryResult.count} matches</p>`);
}


