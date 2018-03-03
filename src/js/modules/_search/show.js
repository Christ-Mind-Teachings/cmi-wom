
const config = require("../../config/config");

function getUnitName(sidx, bidx, unit, sourceId, sectionId) {
  var number;
  var name = config.getUnitTitle(sidx, bidx, unit, sectionId);

  //add "Lesson <number>" to ACIM Lesson titles
  if (sourceId === "acim" && bidx === 2 && unit.charAt(0) === "l") {
    number = Number.parseInt(unit.substr(1, 3),10);
    name = `Lesson ${number}: ${name}`;
  }

  return name;
}

//generate html for list of search matches
function makeList1(sidx, bidx, title, matches, sourceId) {
  return (`
    <div class="ui list">
      <h3>${title} (${matches.length})</h3>
      <ul>
        ${matches.map(m => `
          <li>
            ${getUnitName(sidx, bidx, m.unit, sourceId)} (${m.match.length})
            <ol>
              ${m.match.map(h => `
                <li>
                  <a href="${m.base}?s=show${h.location}">Paragraph ${h.location.substr(2)}</a>
                  <p>${h.context}</p>
                </li>
              `).join("")}
            </ol>
          </li>
        `).join("")}
      </ul>
    </div>
    `);
}

//generate html for list of search matches
function makeList2(sidx, bidx, title, matches, sourceId, sectionId) {
  return (`
    <h3>${title} (${matches.length})</h3>
    <div class="ui list">
      ${matches.map(m => `
        <div class="item">
          <i class="book icon"></i>
          <div class="content">
            <div class="header">
              ${getUnitName(sidx, bidx, m.unit, sourceId, sectionId)} (${m.match.length})
            </div>
            <div class="list">
              ${m.match.map(h => `
                <div class="item">
                  <i class="search icon"></i>
                  <div class="content">
                    <div class="header">
                      <a href="${m.base}?s=show${h.location}">Paragraph ${h.location.substr(2)}</a>
                    </div>
                    <div class="description">
                      ${h.context}
                    </div>
                  </div>
                </div> <!--item -->
              `).join("")}
            </div> <!-- list -->
          </div> <!-- content -->
        </div> <!-- item -->
      `).join("")}
    </div> <!-- ui.list -->
    `);
}

function showSearchResults(sourceId, data) {
  const books = config.getBooks(sourceId);
  console.log("books: ", books);
  var html = "";

  for (let b = 0; b < books.length; b++) {
    let bid = books[b].bid;
    let sidx = books[b].sidx;
    let bidx = books[b].bidx;
    if (data[bid]) {
      html += makeList2(sidx, bidx, books[b].title, data[bid], sourceId);
    }
    else if (books[b].hasSections) {
      for (let s = 0; s < books[b].sections.length; s++) {
        let sectionId = bid + "_" + books[b].sections[s].sid;
        if (data[sectionId]) {
          html += makeList2(sidx, bidx, books[b].sections[s].title, data[sectionId], sourceId, books[b].sections[s].sidx);
        }
      }
    }
  }

  $(".cmi-search-list").html(html);
}

module.exports = {
  searchResults: showSearchResults
};

