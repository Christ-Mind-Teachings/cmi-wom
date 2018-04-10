/*
  Display list of bookmarks for user/source and allow for filtering by topic
*/

import {getKeyInfo} from "../_config/key";
import {getPageInfo} from "../_config/config";
import net from "./bmnet";
import notify from "toastr";

const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
let listInitialized = false;

function generateParagraphList(pid, bkmk, url) {
  return `
    <div class="item"> <!-- ${pid} -->
      <i class="bookmark icon"></i>
      <div class="content">
        <div class="header">
          <a href="${url}#${pid}">Paragraph: ${pid}</a> 
        </div>
        <div class="list">
          ${bkmk.map((annotation) => `
            <div class="item"> <!-- item: ${annotation.rangeStart}/${annotation.rangeEnd} -->
              <i class="right triangle icon"></i>
              <div class="content">
                <div class="header">
                  ${annotation.Comment}
                </div>
              </div>
            </div> <!-- item: ${annotation.rangeStart}/${annotation.rangeEnd} -->
          `).join("")}
        </div>
      </div>
    </div> <!-- item: ${pid} -->
  `;
}

function generateBookmarksForPage(bookmarks, url) {
  let html = "";

  //loop over all paragraphs containing bookmarks
  for(let pid in bookmarks) {
    let paragraphId = `p${(parseInt(pid, 10) - 1).toString(10)}`;
    html += generateParagraphList(paragraphId, bookmarks[pid], url);
  }

  return html;
}

function generatePageTitle(page) {
  let title = `${page.title}`;

  if (page.subTitle) {
    title = `${title} / ${page.subTitle}`;
  }

  return title;
}

function generateBookmarksForBookPages(pages) {
  return `
    ${pages.map((page) => `
      <div class="item"> <!-- item: ${page.title} -->
        <i class="file icon"></i>
        <div class="content">
          <div class="header">
            ${generatePageTitle(page)}
          </div>
          <div class="list">
            ${generateBookmarksForPage(page.bookmarks, page.url)}
          </div>
        </div>
      </div>
    `).join("")}
  `;
}

function generateBookmarkList(books) {
  return `
    ${books.map((book) => `
      <div class="item"> <!-- item: ${book.bookTitle} -->
        <i class="book icon"></i>
        <div class="content">
          <div class="header">
            ${book.bookTitle}
          </div>
          <div class="list">
            ${generateBookmarksForBookPages(book.pages)}
          </div>
        </div>
      </div> <!-- item: ${book.bookTitle} -->
    `).join("")}
  `;
}

/*
  The argument is an array of pages containing bookmarks. Create a new
  array with one entry per book with an array of pages for that book
*/
function combinePages(pages) {
  let books = {};
  let bookArray = [];

  //rearrange the data into a single object per page
  pages.forEach((page) => {
    if (!books[page.bookId]) {
      books[page.bookId] = {};
      books[page.bookId].bookId = page.bookId;
      books[page.bookId].bookTitle = page.bookTitle;
      books[page.bookId].pages = [];
    }
    books[page.bookId].pages.push({
      pageKey: page.pageKey,
      title: page.title,
      url: page.url,
      bookmarks: page.data
    });
  });

  //copy from books to bookArray keeping the original order
  pages.forEach((page) => {
    if (books[page.bookId]) {
      bookArray.push(books[page.bookId]);
      delete books[page.bookId];
    }
  });

  console.log("bookArray: %o", bookArray);
  return bookArray;

}

function populateModal(bookmarks) {
  let html;
  let info = [];

  //get page info for each page with bookmarks
  for (let pageKey in bookmarks) {
    if (pageKey !== "lastFetchDate") {
      info.push(getPageInfo(pageKey, bookmarks[pageKey]));
    }
  }

  //we have an array of bookmarks, each element represents a page
  Promise.all(info)
    .then((responses) => {
      console.log("promise.all: ", responses);
      let bookArray = combinePages(responses);

      html = generateBookmarkList(bookArray);
      $(".cmi-bookmark-list").html(html);

    })
    .catch((err) => {
      console.error(err);
    });
}

/*
  We query bookmarks just once per day then ask the user to manually
  refresh if bookmarks have changed.
*/
function initList() {
  if (listInitialized) {
    return;
  }

  const {sourceId} = getKeyInfo();

  net.queryBookmarks(sourceId)
    .then((response) => {
      //console.log("queryBookmarks(%s", sourceId, response);

      populateModal(response);
      listInitialized = true;
    })
    .catch((err) => {
      notify.error("Failed to get bookmarks");
      console.error("Error getting bookmarks for: %s from server", sourceId, err);
    });
}

function initBookmarkModal() {
  $(uiBookmarkModal)
    .modal({
      dimmerSettings: {opacity: uiModalOpacity},
      autofocus: false,
      centered: true,
      duration: 400,
      inverted: true,
      observeChanges: true,
      transition: "horizontal flip",
      onShow: function() {
        initList();
      },
      onVisible: function() {
      },
      onHidden: function() {
      }
    });

  $(uiOpenBookmarkModal).on("click", (e) => {
    e.preventDefault();

    //populateBookmarkModal(uiBookmarkModalDiv);
    $(uiBookmarkModal).modal("show");
  });
}

export default {
  initialize: function() {
    initBookmarkModal();
  }

};
