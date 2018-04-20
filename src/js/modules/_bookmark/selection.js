// Get selected text from bookmark dialog
const notify = require("toastr");

const textPosition = require("dom-anchor-text-position");
const textQuote = require("dom-anchor-text-quote");
const wrapRange = require("wrap-range-text");
const uuid = require("uuid/v4");

let pageAnnotations = {};

/*
  if the annotation is new then remove the highlight and
  delete from pageAnnotations
*/
export function deleteNewSelection(id) {
  let highlite = pageAnnotations[id];

  //new highlite is not associated with a bookmark annotation so it doesn't have an 'aid' attribute
  if (highlite.aid) {
    return;
  }

  //remove highlight
  highlite.wrap.unwrap();

  //delete the annotation
  delete pageAnnotations[id];
}

export function getSelection(id) {
  return pageAnnotations[id];
}

export function markSelection(annotation) {
  let node = document.getElementById(annotation.pid);
  highlight(annotation, node);
  pageAnnotations[annotation.id] = annotation;
}

export function updateSelectedText(id, aid) {
  $(`[data-annotation-id="${id}"]`).attr("data-aid", aid);
}

function highlight(annotation, toNode = document.body) {
  var anno_id = annotation.id;

  if (annotation.target.source) {
    var selectors = annotation.target.selector;
    for (var i = 0 ; i < selectors.length ; i++) {
      var selector = selectors[i];
      var type = selector.type;
      switch (type) {
        case "TextPositionSelector":
          // skip existing marks
          //var existing_marks = toNode.querySelectorAll(`[data-annotation-id="${anno_id}"]`);
          var existing_marks = document.querySelectorAll(`[data-annotation-id="${anno_id}"]`);
          if (existing_marks.length === 0) {
            var mark = document.createElement("mark");
            mark.dataset["annotationId"] = anno_id;

            //the id of the bookmark annotation that contains this annotation
            if (annotation.aid) {
              mark.dataset["aid"] = annotation.aid;
            }
            mark.classList.add("bookmark-selected-text");
            var range = textPosition.toRange(toNode, selector);
            annotation.wrap = wrapRange(mark, range);
          }
          break;
      }
    }
  }
}

function getSelectedText(range, fromNode = document.body) {
  if (range.collapsed) return null;

  var textPositionSelector = textPosition.fromRange(fromNode, range);
  Object.assign(textPositionSelector, {type: "TextPositionSelector"});

  var textQuoteSelector = textQuote.fromRange(fromNode, range);
  Object.assign(textQuoteSelector, {type: "TextQuoteSelector"});

  var selectedText = {
    type: "Annotation",
    url: location.pathname,
    pid: range.startContainer.parentNode.id,
    id: uuid(),
    target: {
      type: "SpecificResource",
      source: location.href,
      selector: [
        textPositionSelector,
        textQuoteSelector,
      ]
    }
  };

  return selectedText;
}

export function initialize() {
  $("#bookmark-paragraph").on("mouseup", function() {
    processSelection("bookmark");
  });

  $("div.transcript.ui").on("mouseup", function() {
    processSelection("transcript");
  });

  $(".transcript").on("click", "[data-annotation-id]", function(e) {
    let textId = $(this).attr("data-annotation-id");
    let aid = $(this).attr("data-aid");
    let selection = getSelection(textId);

    // console.log("aid: %s", aid);
    // console.log("textId: %s", textId);
    // console.log("annotation: %o", selection);

    //edit annotation if aid not null
    if (aid) {
      $(`#${selection.pid}.cmiTranPara > i.bookmark.icon`).trigger("click", [{status: "edit", textId: aid}]);
    }
  });

  /*
    For new highlights, offer user range of options
  */
  $(".ui.annotation-question").on("click", "a", function(e) {
    e.preventDefault();
    let answer = $(this).attr("data-answer");
    let id = $(this).parent().attr("data-id");

    //hide popup
    $(`[data-annotation-id='${id}']`).popup("hide").popup("destroy");

    //remove highlight and delete annotation
    if (answer === "no") {
      pageAnnotations[id].wrap.unwrap();
      delete pageAnnotations[id];
    }
    //create bookmark
    else {
      //get pid
      let pid = $(`[data-annotation-id='${id}']`).parent("p").attr("id");

      //open bookmark dialog
      $(`#${pid} > i.bookmark.icon`).trigger("click", [{status: "new", textId: id}]);
    }
  });
}

function processSelection(source) {
  let selObj = document.getSelection(); 
  let range = selObj.getRangeAt(0);
  let node;
  let rangeStart = range.startContainer.parentElement.id;
  let rangeEnd = range.endContainer.parentElement.id;

  if (range.collapsed) {
    return;
  }

  //not sure how to handl text selected across paragraphs, so disallow it.
  if (rangeStart !== rangeEnd) {
    notify.info("Please limit selected text to a single paragraph");
    return;
  }

  if (source === "transcript") {
    node = document.getElementById(rangeStart);
  }
  else {
    node = document.getElementById("bookmark-paragraph");

    //don't allow text to be highlighted w/in the bookmark dialog - for now...
    return;
  }

  let selectedText = getSelectedText(range, node);
  if (selectedText) {
    highlight(selectedText, node);

    //persist annotation
    pageAnnotations[selectedText.id] = selectedText;

    //ask user if they want to create a bookmark from selection
    $(`[data-annotation-id='${selectedText.id}']`).popup({
      popup: ".annotation-question.popup",
      closable: false,
      on: "click"
    }); //.popup("show");

    //set current annotation-id
    $(".ui.annotation-question").attr("data-id", selectedText.id);

    //trigger display of popup
    $(`[data-annotation-id="${selectedText.id}"]`).trigger("click");
  }
}