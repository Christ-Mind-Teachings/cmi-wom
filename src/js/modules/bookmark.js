
import { genKey } from "./_config/key";
import {fetchTopics} from "./config";
import notify from "toastr";

//bookmark modal
const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
const uiBookmarkToggle = ".bookmark-toggle";

function initBookmarkModal() {
  $(uiBookmarkModal).modal({
    dimmerSettings: {opacity: uiModalOpacity}
  });

  $(uiOpenBookmarkModal).on("click", (e) => {
    e.preventDefault();

    //populateBookmarkModal(uiBookmarkModalDiv);
    $(uiBookmarkModal).modal("show");
  });
}

//generate the option element of a select statement
function generateOption(topic) {
  if (typeof topic === "object") {
    return `<option value="${topic.value}">${topic.topic}</option>`;
  }
  else {
    return `<option value="${topic}">${topic}</option>`;
  }
}

//generate select html for Topics
function makeTopicSelect(topics) {
  return (`
    <label>Topics</label>
    <select multiple="" class="search ui dropdown">
      <option id="topic-option-list" value="">Select Topic</option>
      ${topics.map(topic => `${generateOption(topic)}`).join("")}
    </select>
  `);
}

/*
 * Add bookmark icons to paragraphs on transcript pages
 * - this will not do anything when called on non-transcript
 *   pages
 */
function addBookMarkers() {
  $(".transcript").addClass("hide-bkmark");
  $("p.cmiTranPara").each(function() {
    $(this).prepend("<i class='bkmark bookmark outline icon'></i>");
  });

  fetchTopics()
    .then((response) => {
      let select = makeTopicSelect(response.topics);
      $("#topic-select").append(select);

      $(".annotation.ui.modal")
        .modal({
          centered: true,
          duration: 100,
          inverted: true,
          observeChanges: true,
          transition: "horizontal flip"
        });

      $("select.dropdown").dropdown();

    })
    .catch(( error ) => {
      notify.error("Unable to fetch bookmark topic list: ", error);
    });

  //create listener
  $(".transcript.ui.text.container").on("click","p.cmiTranPara > i.bookmark.icon", function(e) {
    e.preventDefault();
    let el = $(this);
    let id = el.parent().attr("id");
    let key = genKey();
    
    //add start and end p's to form
    $("input[name|='range']").val(id);

    let paragraph = $(`#${id}`).text();
    $("#bookmark-paragraph").html(`<p>${paragraph}</p>`);

    $(".annotation.ui.modal") .modal("show");

    key = `${key}.${id.substr(1)}`;
    console.log("bookmark clicked at %s, key: %s", id, key);
  });
}

/*
 * show/hide paragraph bookmarks
 *
 */
function createBookmarkToggle(selector) {
  $(selector).on("click", function() {
    if ($(".transcript").hasClass("hide-bkmark")) {
      $(".transcript").removeClass("hide-bkmark");
    }
    else {
      $(".transcript").addClass("hide-bkmark");
    }
  });
}

export default {
  initialize: function() {
    //if we're on a transcript page
    //- add bookmark icons to each paragraph
    //- create bookmark toggle listener
    if ($(".transcript").length) {
      addBookMarkers();
      createBookmarkToggle(uiBookmarkToggle);
    }
    initBookmarkModal();
  }

};
