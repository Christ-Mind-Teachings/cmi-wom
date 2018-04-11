/*
  Display list of bookmarks for user/source and allow for filtering by topic
*/

import {getKeyInfo} from "../_config/key";
import {getPageInfo} from "../_config/config";
import net from "./bmnet";
import notify from "toastr";
import flatten from "lodash/flatten";
import uniq from "lodash/uniq";
import join from "lodash/join";

const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
let listInitialized = false;

//generate the option element of a select statement
function generateOption(topic) {
  return `<option value="${topic}">${topic}</option>`;
}

//generate select html for Topics
function makeTopicSelect(topics) {
  return (`
    <label>Topics</label>
    <select name="topicList" id="bookmark-topic-list" multiple="" class="search ui dropdown">
      <option value="">Select Topic(s)</option>
      ${topics.map(topic => `${generateOption(topic)}`).join("")}
    </select>
  `);
}

function generateHorizontalList(listArray) {
  if (!listArray || listArray.length === 0) {
    return "No Topics";
  }

  return `
    <div class="ui horizontal bulleted list">
      ${listArray.map((item) => `
        <div class="item">
          <em>${item}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function generateParagraphList(pid, bkmk, url, pTopicList) {
  if (bkmk.length === 0) {
    return `
      <div class="bookmark-item item"> <!-- ${pid} -->
        <i class="bookmark icon"></i>
        <div class="content">
          <div class="header">
            <a href="${url}#${pid}">Paragraph: ${pid}</a> 
          </div>
        </div>
      </div> <!-- item: ${pid} -->
    `;
  }

  return `
    <div class="${join(pTopicList," ")} bookmark-item item"> <!-- ${pid} -->
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
                  ${generateHorizontalList(annotation.topicList)}
                </div>
                <div class="description">
                  ${annotation.Comment?annotation.Comment:"No Comment"}
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
    //omit topic list keys
    if (!pid.startsWith("tpList")) {
      let paragraphId = `p${(parseInt(pid, 10) - 1).toString(10)}`;
      html += generateParagraphList(paragraphId, bookmarks[pid], url, bookmarks[`tpList${pid}`]);
    }
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
      <div class="item"> <!-- item: ${book.bookId} -->
        <div class="right floated content">
          <div data-book="${book.bookId}" class="green ui small button">Open</div>
        </div>
        <i class="book icon"></i>
        <div class="content">
          <div class="header">
            ${book.bookTitle}
          </div>
          <div id="${book.bookId}-list" class="hide-bookmarks list">
            ${generateBookmarksForBookPages(book.pages)}
          </div>
        </div>
      </div> <!-- item: ${book.bookId} -->
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

  let allTopics = [];

  //add a list of all topics used for each bookmark
  bookArray.forEach(( book ) => {
    book.pages.forEach((page) => {
      for(let pid in page.bookmarks) {
        //console.log(page.bookmarks[pid]);
        if (page.bookmarks[pid].length > 0) {
          let tpl = page.bookmarks[pid].map((annotation) => {
            if (annotation.topicList) {
              return annotation.topicList;
            }
          });
          //collect all topics used for modal dropdown select control
          let uniqueArray = uniq(flatten(tpl));

          page.bookmarks[`tpList${pid}`] = uniqueArray;
          allTopics.push(uniqueArray);
        }
      }
    });
  });

  let allUniqueTopics = uniq(flatten(allTopics)).sort();
  return {bookArray, topics: allUniqueTopics};

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
      let {bookArray, topics} = combinePages(responses);
      console.log("unique topics: %o", topics);

      //generate html and attach to modal dialog
      html = generateBookmarkList(bookArray);
      $(".cmi-bookmark-list").html(html);

      let select = makeTopicSelect(topics);
      $("#bookmark-modal-topic-select").html(select);
      $("#bookmark-topic-list").dropdown();

      //set click listeners
      $(".cmi-bookmark-list").on("click", "[data-book]", function(e) {
        e.stopPropagation();
        let bookId = $(this).attr("data-book");
        let bookList = $(`#${bookId}-list`);

        if (bookList.hasClass("hide-bookmarks")) {
          bookList.removeClass("hide-bookmarks");
          $(this).text("Close").removeClass("green").addClass("yellow");
        }
        else {
          bookList.removeClass("yellow").addClass("green hide-bookmarks");
          $(this).text("Open").removeClass("yellow").addClass("green");
        }
      });

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