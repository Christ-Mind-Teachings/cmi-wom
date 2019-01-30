import scroll from "scroll-into-view";
import {getConfig} from "../_config/config";

const uiTocModal = ".toc.ui.modal";
const uiOpenTocModal = ".toc-modal-open";
const uiModalOpacity = 0.5;

//generate html for questions
function renderQuestions(questions, c) {
  return `
    <div class="list">
      ${questions.map(q => `<a data-lid="${++c.counter}" class="item" href="${q.url}">${q.title}</a>`).join("")}
    </div>
  `;
}

//generate html for Contents
function makeContents(contents) {
  var c = {counter: 0};
  return (`
    <div class="ui ordered relaxed list">
      ${contents.map(unit => `
        <div class="item">
          <a data-lid="${++c.counter}" href="${unit.url}">${unit.title}</a>
          ${unit.questions ? renderQuestions(unit.questions, c) : ""}
        </div>
      `).join("")}
    </div>
  `);
}

//called for transcript pages
function loadTOC() {
  console.log("transcript page: loading toc");
  let book = $("#contents-modal-open").attr("data-book").toLowerCase();

  getConfig(book)
    .then((contents) => {
      $(".toc-image").attr("src", `${contents.image}`);
      $(".toc-title").html(`Table of Contents: <em>${contents.title}</em>`);

      $(".toc-list").html(makeContents(contents.contents));
      highlightCurrentTranscript(contents.bid);
    })
    .catch((error) => {
      console.error(error);
      $(".toc-image").attr("src", "/public/img/cmi/toc_modal.png");
      $(".toc-title").html("Table of Contents: <em>Error</em>");
      $(".toc-list").html(`<p>Error: ${error.message}</p>`);
      $(uiTocModal).modal("show");
    });
}

/*
  set next/prev controls on menu for workbook transcripts
*/
function nextPrev($el, max) {
  let LAST_ID = max;
  let prevId = -1, nextId = -1, href, text;
  let lid = $el.attr("data-lid");
  let lessonId = parseInt(lid, 10);

  //disable prev control
  if (lessonId === 1) {
    $("#toc-previous-page").addClass("disabled");
  }
  else {
    $("#toc-previous-page").removeClass("disabled");
    prevId = lessonId - 1;
  }

  //disable next control
  if (lessonId === LAST_ID) {
    $("#toc-next-page").addClass("disabled");
  }
  else {
    $("#toc-next-page").removeClass("disabled");
    nextId = lessonId + 1;
  }

  if (prevId > -1) {
    href = $(`a[data-lid="${prevId}"]`).attr("href");
    text = $(`a[data-lid="${prevId}"]`).text();

    //set prev tooltip and href
    $("#toc-previous-page > span").attr("data-tooltip", `${text}`);
    $("#toc-previous-page").attr("href", `${href}`);
  }

  if (nextId > -1) {
    href = $(`a[data-lid="${nextId}"]`).attr("href");
    text = $(`a[data-lid="${nextId}"]`).text();

    //set prev tooltip and href
    $("#toc-next-page > span").attr("data-tooltip", `${text}`);
    $("#toc-next-page").attr("href", `${href}`);
  }
}

/*
  If we're on a transcript page, highlight the
  current transcript in the list
*/
function highlightCurrentTranscript(bid) {
  let page = location.pathname;
  let $el = $(`.toc-list a[href='${page}']`);

  //remove href to deactivate link for current page and
  //scroll into middle of viewport
  $el.addClass("current-unit").removeAttr("href");
  scroll($el.get(0));

  let max = 1;
  switch(bid) {
    case "woh":
      max = 37;
      break;
    case "wot":
      max = 24;
      break;
    case "wok":
      max = 21;
      break;
    case "tjl":
      max = 15;
      break;
    case "wos":
      max = 9;
      break;
    case "early":
      max = 43;
      break;
    case "acq":
      max = 3;
      break;
  }
  nextPrev($el, max);
}

/*
  Calls to this function are valid for transcript pages.
*/
export function getBookId() {
  return $(uiOpenTocModal).attr("data-book");
}

export default {

  /*
   * Init the modal dialog with data from JSON file 
   * or local storage
   */
  initialize: function(env) {
    //dialog settings
    $(uiTocModal).modal({
      dimmerSettings: {opacity: uiModalOpacity},
      observeChanges: true
    });

    //load toc once for transcript pages
    if (env === "transcript") {
      loadTOC();
    }

    /*
     * TOC populated by JSON file from AJAX call if not found
     * in local storage.
     * 
     * Read value of data-book attribute to identify name of file
     * with contents.
     */
    $(uiOpenTocModal).on("click", (e) => {
      e.preventDefault();
      let book = $(e.currentTarget).attr("data-book").toLowerCase();

      //load the TOC if we're not on a transcript page
      if (env !== "transcript") {
        getConfig(book)
          .then((contents) => {
            $(".toc-image").attr("src", `${contents.image}`);
            $(".toc-title").html(`Table of Contents: <em>${contents.title}</em>`);
            $(".toc-list").html(makeContents(contents.contents));
            $(uiTocModal).modal("show");
          })
          .catch((error) => {
            $(".toc-image").attr("src", "/public/img/cmi/toc_modal.png");
            $(".toc-title").html("Table of Contents: <em>Error</em>");
            $(".toc-list").html(`<p>Error: ${error.message}</p><p>Failed to get ${url}`);
            $(uiTocModal).modal("show");
          });
      }
      else {
        $(uiTocModal).modal("show");
      }
    });
  }
};
