import net from "./bmnet";
import notify from "toastr";
import {annotation} from "./bookmark";
import {getBookmark} from "./bmnet";
import range from "lodash/range";

const form = `
  <form name="annotation" id="annotation-form" class="ui form">
    <input class="hidden-field" type="text" readonly="" name="creationDate">
    <input class="hidden-field" type="text" name="aid" readonly>
    <input class="hidden-field" type="text" readonly="" name="rangeStart">
    <div class="fields">
      <div class="three wide field">
        <input id="rangeEnd" type="text" name="rangeEnd" maxlength="4" placeholder="End">
      </div>
      <div id="available-topics" class="twelve wide field"></div>
      </div>
    </div>
    <div class="inline field">
      <textarea name="Comment" placeholder="Comment" rows="1"></textarea>
    </div>
    <div class="field">
      <input type="text" name="newTopics" placeholder="New topics? Comma delimited list">
    </div>
    <div class="fields">
      <button class="annotation-submit ui button" type="submit">Submit</button>
      <button class="annotation-cancel ui red basic button">Cancel</button>
      <div class="twelve wide field">
        <button class="annotation-delete ui red right floated button">Delete</button>
      </div>
    </div>
  </form>
  `;

const wrapper = `
  <div class="annotate-wrapper ui raised segment"></div>`;

function initializeForm(pid, aid, annotation) {
  let form = $("#annotation-form");

  //a new annotation
  if (!annotation) {
    form.form("set values", {
      rangeStart: pid,
      rangeEnd: pid,
      aid: aid
    });
  }
  else {
    form.form("set values", {
      rangeStart: annotation.rangeStart,
      rangeEnd: annotation.rangeEnd,
      aid: annotation.aid,
      creationDate: annotation.creationDate,
      Comment: annotation.Comment,
      topicList: annotation.topicList
    });
  }

  document.getElementById("rangeEnd").focus();
}

function getFormData() {
  return $("#annotation-form").form("get values");
}

function editHandler() {
  $(".transcript").on("click", "[data-annotation-id]", function(e) {
    e.preventDefault();

    //we're already editing the annotation
    if ($(this).parent("p").hasClass("annotation-edit")) {
      return;
    }

    //show this highlight, all others are hidden
    $(this).addClass("show");

    let aid = $(this).attr("data-annotation-id");
    let pid = $(this).parent("p").attr("id");
    let bookmarkData = getBookmark(pid);
    let annotation = bookmarkData.bookmark.find(value => value.aid === aid);

    let rangeStart = parseInt(annotation.rangeStart.substr(1), 10);
    let rangeEnd = parseInt(annotation.rangeEnd.substr(1), 10);

    //add class 'annotation-edit' to paragraphs so they can be wrapped
    if (rangeStart !== rangeEnd) {
      let annotationRange = range(rangeStart, rangeEnd + 1);
      for (let i = 0; i < annotationRange.length; i++) {
        $(`#p${annotationRange[i]}`).addClass("annotation-edit");
      }
    }
    else {
      $(`#${pid}`).addClass("annotation-edit");
    }

    $(".annotation-edit").wrapAll(wrapper);
    $(".annotate-wrapper").prepend(form);
    getTopicList(pid, aid, annotation);
  });
}

function submitHandler() {
  $(".transcript").on("submit", "#annotation-form", function(e) {
    e.preventDefault();

    let formData = getFormData();
    unwrap();

    //remove class "show" added when form was displayed
    $(`[data-annotation-id="${formData.aid}"]`).removeClass("show");

    annotation.submit(formData);
    $(".transcript .annotation-edit").removeClass("annotation-edit");
  });
}

/*
  Handle cancel button pressed on annotation form
*/
function cancelHandler() {
  $(".transcript").on("click", "#annotation-form .annotation-cancel", function(e) {
    e.preventDefault();

    let formData = getFormData();
    unwrap();

    //remove class "show" added when form was displayed
    $(`[data-annotation-id="${formData.aid}"]`).removeClass("show");

    annotation.cancel(formData);
    $(".transcript .annotation-edit").removeClass("annotation-edit");
  });
}

function deleteHandler() {
  $(".transcript").on("click", "#annotation-form .annotation-delete", function(e) {
    e.preventDefault();

    let formData = getFormData();
    unwrap();

    annotation.delete(formData);
    $(".transcript .annotation-edit").removeClass("annotation-edit");
  });
}

/*
  initialize annotation event handlers
*/
export function initialize() {
  submitHandler();
  cancelHandler();
  deleteHandler();
  editHandler();
}

/*
  Display annotation form
  args:
    highlight - highlighted text object
  */
export function getUserInput(highlight) {
  $(`#${highlight.pid}`).addClass("annotation-edit");
  $(".annotation-edit").wrapAll(wrapper);
  $(".annotate-wrapper").prepend(form);
  getTopicList(highlight.pid, highlight.id);

  //show this highlight, all others are hidden
  $(`[data-annotation-id="${highlight.id}"]`).addClass("show");
}

/*
  remove annotation form
*/
function unwrap() {
  $(".annotate-wrapper > form").remove();
  $(".annotation-edit").unwrap();
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

function makeTopicSelect(topics) {
  return (`
    <select name="topicList" id="annotation-topic-list" multiple="" class="search ui dropdown">
      <option value="">Select Topic(s)</option>
      ${topics.map(topic => `${generateOption(topic)}`).join("")}
    </select>
  `);
}

function getTopicList(pid, aid, data) {
  //get topics from server or local storage
  net.fetchTopics()
    .then((response) => {
      let selectHtml = makeTopicSelect(response.topics);
      $("#available-topics").html(selectHtml);

      //init annotation form components
      $("select.dropdown").dropdown();

      //init form
      initializeForm(pid, aid, data);

    })
    .catch(( error ) => {
      console.error("topic fetch error: ", error);
      notify.error("Unable to fetch bookmark topic list: ", error);
    });
}