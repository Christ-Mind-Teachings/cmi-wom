
import { genKey } from "./_config/key";
import {postBookmark, addToTopicList, fetchTopics} from "./config";
import notify from "toastr";
import differenceWith from "lodash/differenceWith";

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
    <select name="topicList" id="annotation-topic-list" multiple="" class="search ui dropdown">
      <option value="">Select Topic</option>
      ${topics.map(topic => `${generateOption(topic)}`).join("")}
    </select>
  `);
}

/*
  POST bookmark to API
*/
function createBookmark(bookmark) {
  let {pageKey, rangeStart} = bookmark;
  let bookmarkId;

  rangeStart = rangeStart.trim();

  if (rangeStart.startsWith("p")) {
    bookmarkId = `${pageKey}.${rangeStart.substr(1)}`;
  }
  else {
    bookmarkId = `${pageKey}.${rangeStart}`;
  }

  bookmark.url = location.pathname;
  delete bookmark.pageKey;

  postBookmark(pageKey, bookmarkId, bookmark);

  //store bookmark locally
  
}

/*
  new topics entered on the annotation form are formatted
  to keep only alpha chars and comma. Commas are used to delimit
  topics.

  Topics are converted from string to array and first character is
  uppercased.
*/
function formatNewTopics({newTopics}) {
  //only allow alpha chars and comma's
  let topics = newTopics.replace(/[^a-zA-Z,]/g, "");

  if (!topics || topics === "" ) {
    return [];
  }

  //remove leading and trailing comma's
  topics = topics.replace(/^,*/, "");
  topics = topics.replace(/,*$/, "");

  let newTopicArray = topics.split(",");

  //uppercase first char of each topic
  newTopicArray = newTopicArray.map(s => s.charAt(0).toUpperCase() + s.slice(1));

  return newTopicArray;
}

/*
  Update annotation form to add new topics
*/
function updateTopicOptions(topics) {
  return (`
    <option value="">Select Topic</option>
    ${topics.map(topic => `${generateOption(topic)}`).join("")}
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
      $("#topic-select").html(select);

      $(".annotation.ui.modal")
        .modal({
          centered: true,
          duration: 100,
          inverted: true,
          observeChanges: true,
          transition: "horizontal flip"
        });

      $("select.dropdown").dropdown();

      //listen for user click of bookmark icon - then display dialog
      $(".transcript.ui.text.container").on("click","p.cmiTranPara > i.bookmark.icon", function(e) {
        e.preventDefault();
        let el = $(this);
        let id = el.parent().attr("id");
        let key = genKey();
        
        //add start and end p's to form
        let form = $("#annotation-form");
        form.form("set values", {
          rangeStart: id,
          rangeEnd: id,
          pageKey: key
        });

        //add selected paragraph to modal dialog
        let paragraph = $(`#${id}`).text();
        $("#bookmark-paragraph").html(`<p>${paragraph}</p>`);

        $(".annotation.ui.modal") .modal("show");

        key = `${key}.${id.substr(1)}`;
        console.log("bookmark clicked at %s, key: %s", id, key);
      });
    })
    .catch(( error ) => {
      notify.error("Unable to fetch bookmark topic list: ", error);
    });
}

//listen for user submit of annotation form
$("#annotation-form").submit((e) => {
  e.preventDefault();

  //get data from form
  let form = $("#annotation-form");
  let formValues = form.form("get values");

  //format new topics
  let newTopics = formatNewTopics(formValues);
  delete formValues.newTopics;

  //hide modal and reset fields
  $(".annotation.ui.modal") .modal("hide");
  $("#annotation-form").form("clear");

  //if no new topics post the bookmark and return
  if (!newTopics || newTopics.length === 0) {
    //post annotation to server
    createBookmark(formValues);
    return;
  }

  //Check for new topics already in topic list
  fetchTopics()
    .then((response) => {
      //remove duplicate topics from and return the rest in difference[]
      let newUniqueTopics = differenceWith(newTopics, response.topics, (n,t) => {
        if (typeof t === "object") {
          return t.value === n;
        }
        return t === n;
      });

      //console.log("newUniqueTopics: ", newUniqueTopics);

      //these are the new topics
      if (newUniqueTopics.length > 0) {
        //add new topics topic list
        let allTopics = addToTopicList(newUniqueTopics);

        //add new topics to this annotations topicList
        formValues.topicList = formValues.topicList.concat(newUniqueTopics);

        //add newTopics to formValues for posting to server
        formValues.newTopics = newUniqueTopics;

        //update the annotation form
        let select = updateTopicOptions(allTopics.topics);
        $("#annotation-topic-list").html(select);
      }

      //post the bookmark
      createBookmark(formValues);
    })
    .catch(() => {
      throw new Error("error in removing duplicate topics");
    });
});

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
