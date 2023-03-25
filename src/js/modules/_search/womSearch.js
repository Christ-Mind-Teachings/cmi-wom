import uniq from "lodash/uniq";

//global source specific data
let g_sourceInfo;

function getUnitName(pageInfo, unitInfo) {
  return pageInfo[unitInfo.pageKey].title;
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
  //let keyLength = womInfo.getKeyInfo().keyLength;
  let keyLength = g_sourceInfo.keyInfo.getKeyInfo().keyLength;
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

//get unique pageKeys from query results
function getPageKeys(data) {
  let keyLength = g_sourceInfo.keyInfo.getKeyInfo().keyLength;
  let keys = data.map(m => m.key.substr(0, keyLength));
  return uniq(keys);
}

/*
 * Prepare WOM search results and return a promise.
 * - resolved value is an object
 */
export function prepareSearchResults(data) {
  const books = g_sourceInfo.keyInfo.getBooks();
  let query = data.queryTransformed;
  let pageInfoPromises = [];

  return new Promise((resolve, reject) => {

    //get array of all unique page info - promises
    for (let b = 0; b < books.length; b++) {
      let bid = books[b];
      if (data[bid]) {
        let pageKeys = getPageKeys(data[bid]);
        for (const pageKey of pageKeys) {
          pageInfoPromises.push(g_sourceInfo.getPageInfo(pageKey));
        }
      }
    }

    Promise.all(pageInfoPromises)
      .then((responses) => {
        let pageInfo = {};
        let titleArray = {};

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
          }
        }

        let searchObj = buildSearchResultsObject(query, data.count, titleArray, pageInfo, matches, data);
        resolve(searchObj);
        return;
      })
      .catch((error) => {
        console.error("Error: %o", error);
        reject(error);
        return;
      });
  });
}

/*
 * Build object of search results to save in local store
 */
function buildSearchResultsObject(queryString, matchCount, titleArray, pageInfo, data, originalResult) {
  const books = g_sourceInfo.keyInfo.getBooks();
  let keyLength = g_sourceInfo.keyInfo.getKeyInfo().keyLength;

  //console.log("buildSearchResultsObject()");

  //no results, return empty object
  if (matchCount === 0) {
    return {
      query: "",
      count: 0,
      strict: false,
      titleArray: [],
      pageInfo: [],
      data: {},
      flat: []
    };
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

  return {
    query: queryString,
    count: matchCount,
    strict: originalResult.strict,
    titleArray: titleArray,
    pageInfo: pageInfo,
    data: data,
    flat: flatMatches
  };
}

/*
 * Generate HTML to display search results
 */
export function generateHTML(queryResult) {

  const books = g_sourceInfo.keyInfo.getBooks();
  let html = "";

  //generate html for search hits
  for (let bid of books) {
    if (queryResult.data[bid]) {
      html += makeList(bid, queryResult.titleArray, queryResult.pageInfo, queryResult.data[bid]);
    }
  }

  return html;
}

export function womSearchInit(si) {
  g_sourceInfo = si;
  g_sourceInfo.prepareSearchResults = prepareSearchResults;
  g_sourceInfo.generateHTML = generateHTML;

  return g_sourceInfo;
}

