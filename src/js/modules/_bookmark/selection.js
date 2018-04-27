import notify from "toastr";

const textPosition = require("dom-anchor-text-position");
const textQuote = require("dom-anchor-text-quote");
const wrapRange = require("wrap-range-text");
const uuid = require("uuid/v4");

import {getUserInput} from "./annotate";
import {initialize as initAnnotation} from "./annotate";

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

export function deleteSelection(id) {
  let highlite = pageAnnotations[id];

  if (!highlite) {
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

            //this sometimes fails and is fixed by adjusting the selector
            var range;
            try {
              range = textPosition.toRange(toNode, selector);
              annotation.wrap = wrapRange(mark, range);
            }
            catch(err) {
              console.log("adjusting selector.end");
              selector.end--;
              range = textPosition.toRange(toNode, selector);
              annotation.wrap = wrapRange(mark, range);
            }
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

/*
  Capture user text selection
*/
export function initialize() {
  $("div.transcript.ui").on("mouseup", function() {
    processSelection("transcript");
  });

  //init annotation input, edit, and delete
  initAnnotation();
}

/*
  create annotation from selected text
*/
function processSelection() {
  let selObj = document.getSelection(); 
  let range = selObj.getRangeAt(0);

  if (range.collapsed) {
    return;
  }

  let rangeStart = range.startContainer.parentElement.id;
  let rangeEnd = range.endContainer.parentElement.id;

  //not sure how to handl text selected across paragraphs, so disallow it.
  if (rangeStart !== rangeEnd) {
    notify.info("Please limit selected text to a single paragraph");
    return;
  }

  let node = document.getElementById(rangeStart);

  //create annotation
  let selectedText = getSelectedText(range, node);
  if (selectedText) {
    highlight(selectedText, node);

    //persist annotation
    pageAnnotations[selectedText.id] = selectedText;

  //   //ask user if they want to create a bookmark from selection
  //   $(`[data-annotation-id='${selectedText.id}']`).popup({
  //     popup: ".annotation-question.popup",
  //     closable: false,
  //     on: "click"
  //   }); //.popup("show");

  //   //set current annotation-id
  //   $(".ui.annotation-question").attr("data-id", selectedText.id);

  //   //trigger display of popup
  //   $(`[data-annotation-id="${selectedText.id}"]`).trigger("click");

    getUserInput(selectedText);
  }
  
}
