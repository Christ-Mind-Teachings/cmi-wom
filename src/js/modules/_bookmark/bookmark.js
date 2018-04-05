/*
  Bookmarks --

  A bookmark is associated with a non-omitted paragraph on a transcript page. It can contain zero
  or more annotations. An annotation can contain a comment and list of topics selected from a
  perviously defined list.

  Bookmarks are stored on the server for signed in users and in local storage for other users.

  Annotations can be created, updated and deleted.

  When the page is loaded bookmarks for signed in users are queried from the server and persisted
  to local storage. The local store is referred to whenever an action is taken on a bookmark. The
  action is also sent to the server for signed in users.

  On the server, bookmarks are keyed by userId and bookmarkId. The userId is an md5 hash of the 
  users email address. The bookmarkId is the pageKey + paragraphKey. The pageKey is a numeric
  value that uniquely identifies a transcript page and the paragraphKey is the paragraph id (#pid)
  converted to an integer and incremented by one so the first paragraph starts with one instead
  of zero.

  The paragraphKey is then divided by 1000 and added to the pageKey so any transcript paragraph
  can be uniquely referenced and sorted in a logical ordering.

  Topics --

  ... to be described ...

*/

import net  from "./bmnet";
import notify from "toastr";
import differenceWith from "lodash/differenceWith";
import cloneDeep from "lodash/cloneDeep";
import hotKeys from "hotkeys-js";
import {registerNotify} from "../_audio/focus";

//bookmark modal
const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
const uiBookmarkToggle = ".bookmark-toggle";

let audioPlayer = null;
let focus = null;

let gMaxId;

function audioParagraphChange(pid) {
  console.log("audioParagraphChange(%s)", pid);
}

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
  Generate html for the comment of a given annotation for
  display in the modal dialog
*/
function renderComment(comment) {
  if (comment) {
    return `
      <div>
        <a class="edit-annotation" data-tooltip="Click to modify annotation">${comment}</a>
      </div>
    `;
  }
  else {
    return `
      <div>
        <a class="edit-annotation" data-tooltip='Click to modify annotation'>No Comment</a>;
      </div>
    `;
  }
}

/*
  Generate html for the topic list of a given annotation for
  display in the modal dialog
*/
function renderTopics(topics) {
  if (!topics || topics.length === 0) {
    return "<div>No Topics</div>";
  }
  else {
    return `
      <div class="ui horizontal bulleted list">
        ${topics.map(topic => `<div class="item"><em>${topic}</em></div>`).join("")}
      </div>
    `;
  }
}

/*
  Generate html for a single annotation
  - used in the bookmark modal dialog
*/
function makeAnnotationListItem(pid, annotation) {
  return `
    <div data-pid="${pid}" data-aid="${annotation.creationDate}" class="item">
      <div class="right floated content">
        <div class="delete-annotation tiny ui button">Delete</div>
      </div>
      <i class="edit icon"></i>
      <div class="content">
        ${renderTopics(annotation.topicList)}
        ${renderComment(annotation.Comment)}
      </div>
    </div>
  `;
}

//Divides annotation list from annotation form in bookmark modal
function addAnnotationDivider() {
  return `
    <h4 class="ui horizontal divider header">
      <i class="edit icon"></i>
      Annotation
    </h4>
  `;
}

/*
  add list of existing annotations to 
  bookmark dialog

  args: id: paragraph id
*/
function makeAnnotationList(pid) {
  net.getBookmark(pid)
    .then((bookmark) => {

      if (bookmark.bookmark && bookmark.bookmark.length > 0) {
        let annotations = bookmark.bookmark;

        //sort by rangeEnd
        annotations.sort((a,b) => {
          const aEnd = parseInt(a.rangeEnd.substr(1), 10);
          const bEnd = parseInt(b.rangeEnd.substr(1), 10);
          return aEnd - bEnd;
        });

        let list = (`
          ${annotations.map(anno => `
            ${makeAnnotationListItem(pid, anno)}
          `).join("")}
          ${addAnnotationDivider()} 
        `);

        //add list to dialog
        $(".annotation.modal .annotation-list").html(list);

        //add listener to delete buttons
        $(".annotation-list").on("click","div.delete-annotation.button", function() {
          let el = $(this);
          let aid = el.parent().parent().data("aid");
          let pid = el.parent().parent().data("pid");

          $(`[data-aid='${aid}']`).remove();

          //mark as having no annotations if all have been deleted
          let remainingAnnotations = net.deleteAnnotation(pid, aid);

          if (remainingAnnotations === 0) {
            $(`#${pid} > i.bkmark.bookmark`).addClass("outline");
          } 
        });

        //add listener to edit an annotation in the list
        $(".annotation-list").on("click","a.edit-annotation", function() {
          let el = $(this);
          let aid = el.parent().parent().parent().data("aid");
          let pid = el.parent().parent().parent().data("pid");

          //this does not make a network call
          let annotation = net.getAnnotation(pid, aid);

          let form = $("#annotation-form");
          form.form("set values", {
            rangeStart: pid,
            creationDate: annotation.creationDate,
            rangeEnd: annotation.rangeEnd,
            Comment: annotation.Comment,
            topicList: annotation.topicList
          });
        });
      }
      else {
        //delete annotation list if one exists
        $(".annotation.modal .annotation-list").html("");
      }

      //add selected paragraph to modal dialog
      let paragraph = $(`#${pid}`).text();
      $("#bookmark-paragraph").html(`<p>${paragraph}</p>`);
      $(".annotation.ui.modal") .modal("show"); 
  
    })
    .catch((err) => {
      console.log("error: ", err);
      notify.error(err);
    });
}

/*
  Clean up form values and prepare to send to API  
*/
function createAnnotaion(formValues) {

  let annotation = cloneDeep(formValues);

  annotation.rangeStart = annotation.rangeStart.trim();
  annotation.rangeEnd = annotation.rangeEnd.trim();

  if (!annotation.rangeEnd.startsWith("p")) {
    annotation.rangeEnd = `p${annotation.rangeEnd}`;
  }

  //delete empty fields
  if (annotation.Comment === "") {
    delete annotation.Comment;
  }

  if (annotation.creationDate === "") {
    delete annotation.creationDate;
  }

  if (annotation.topicList.length === 0) {
    delete annotation.topicList;
  }

  delete annotation.newTopics;

  //persist the bookmark
  net.postAnnotation(annotation);

  //add new annotation to the annotation list of the modal dialog
  let newAnnotationHTML = makeAnnotationListItem(annotation.rangeStart, annotation);
  let annotationList = $(".annotation-list");

  //check if there is already a list of annotations 
  // -there will be if there is a h4 child
  if (annotationList.children("h4").length === 0) {
    $(annotationList.append(newAnnotationHTML));
    $(annotationList).append(addAnnotationDivider());
  }
  else {
    //check if the annotation already exists in the list, this will happen
    //when an annotation has been modified
    let aid = annotation.creationDate.toString(10);
    $(".annotation-list").children("div").each(function() {
      let listAid = $(this).attr("data-aid");
      if (listAid === aid) {
        $(this).remove();
      }
    });
    $(annotationList.prepend(newAnnotationHTML));
  }
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

  //get topic list
  net.fetchTopics()
    .then((response) => {
      let select = makeTopicSelect(response.topics);
      $("#topic-select").html(select);

      $(".annotation.ui.modal")
        .modal({
          autofocus: false,
          centered: true,
          duration: 400,
          inverted: true,
          observeChanges: true,
          transition: "horizontal flip",
          onVisible: function() {
            hotKeys.setScope("annotation");
            document.getElementById("rangeEnd").focus();

            if (audioPlayer) {
              if (audioPlayer.paused) {
                //show play icon - this is default
                $(".annotate-play").html("<i class='play icon'></i>Play");
              }
              else {
                //audio is playing, show pause icon
                $(".annotate-play").html("<i class='pause icon'></i>Pause");
              }
            }
            else {
              console.log("audioPlayer is null in Bookmark");
            }
          },
          onHidden: function() {
            hotKeys.deleteScope("annotation");
          }
        });

      $("select.dropdown").dropdown();

      //listen for user click of bookmark icon - then display dialog
      $(".transcript.ui.text.container").on("click","p.cmiTranPara > i.bookmark.icon", function(e) {
        e.preventDefault();
        let el = $(this);
        let id = el.parent().attr("id");
        
        //add start and end p's to form
        let form = $("#annotation-form");
        form.form("clear");
        form.form("set values", {
          rangeStart: id,
          rangeEnd: id
        });

        //generate list of existing annotations for paragraph
        makeAnnotationList(id);
      });
    })
    .catch(( error ) => {
      notify.error("Unable to fetch bookmark topic list: ", error);
    });
}

hotKeys("ctrl+n", "annotation", function(e, h) {
  e.preventDefault();
  console.log("triggering next");
  $(".annotate-next-paragraph.button").trigger("click");
});

//add listener for next paragraph button on annotation modal
$(".annotate-next-paragraph.button").on("click", function(e) {
  e.stopPropagation();
  let form = $("#annotation-form");
  let formValues = form.form("get values");

  //get numeric paragraph number
  let id;
  let stillLooking = true;

  while (stillLooking) {
    id = parseInt(formValues.rangeStart.substr(1), 10);
    id = id + 1;

    if (id >= gMaxId) {
      //disable button
      $(".annotate-next-paragraph.button").addClass("disabled");
    }

    //gone past the last paragraph
    if (id > gMaxId) {
      return;
    }

    //see if this is a valid paragraph id
    if ($(`#p${id}`).length === 1) {
      stillLooking = false;

      //enable prev button - it may or may not be disabled
      $(".annotate-prev-paragraph.button").removeClass("disabled");

      //trigger click of previous bookmark
      $(`#p${id} > i.bookmark.icon`).trigger("click");
    }
  }
});

hotKeys("ctrl+p", "annotation", function(e, h) {
  e.preventDefault();
  console.log("triggering prev");
  $(".annotate-prev-paragraph.button").trigger("click");
});

//add listener for prev paragraph button on annotation modal
$(".annotate-prev-paragraph.button").on("click", function(e) {
  e.stopPropagation();
  let form = $("#annotation-form");
  let formValues = form.form("get values");

  //get numeric paragraph number
  let id;
  let stillLooking = true;

  while (stillLooking) {
    id = parseInt(formValues.rangeStart.substr(1), 10);
    id = id - 1;

    if (id <= 0) {
      //disable
      $(".annotate-prev-paragraph.button").addClass("disabled");
    }

    //gone past the first paragraph
    if (id < 0) {
      return;
    }

    //see if this is a valid paragraph id
    if ($(`#p${id}`).length === 1) {
      stillLooking = false;

      //enable 'next' button, it may or may not be disabled
      $(".annotate-next-paragraph.button").removeClass("disabled");

      //trigger click of previous bookmark
      $(`#p${id} > i.bookmark.icon`).trigger("click");
    }
  }
});

//setup audio play/pause listener
$("button.annotate-play").on("click", function(e) {
  e.preventDefault();
  if (audioPlayer.paused) {
    audioPlayer.play();
    $(".annotate-play").html("<i class='pause icon'></i>Pause");
  }
  else {
    audioPlayer.pause();
    $(".annotate-play").html("<i class='play icon'></i>Play");
  }
});

//listen for user submit of annotation form
$("#annotation-form").submit((e) => {
  e.preventDefault();

  //get data from form
  let form = $("#annotation-form");
  let formValues = form.form("get values");

  //format new topics
  let newTopics = formatNewTopics(formValues);

  //hide modal and reset fields
  //$(".annotation.ui.modal").modal("hide");
  $("#annotation-form").form("clear");

  //indicate paragraph has a bookmark
  if (formValues.rangeStart) {
    $(`#${formValues.rangeStart} > i.bkmark.bookmark`).removeClass("outline");
  }

  //if no new topics post the bookmark and return
  if (!newTopics || newTopics.length === 0) {
    //post annotation to server
    createAnnotaion(formValues);
  
    //reset form values
    form.form("set values", {
      rangeStart: formValues.rangeStart,
      rangeEnd: formValues.rangeEnd
    });

    //set focus on rangeEnd
    document.getElementById("rangeEnd").focus();

    return;
  }

  //Check for new topics already in topic list
  net.fetchTopics()
    .then((response) => {
      //remove duplicate topics from and return the rest in difference[]
      let newUniqueTopics = differenceWith(newTopics, response.topics, (n,t) => {
        if (typeof t === "object") {
          return t.value === n;
        }
        return t === n;
      });

      //these are the new topics
      if (newUniqueTopics.length > 0) {
        //add new topics topic list
        let allTopics = net.addToTopicList(newUniqueTopics);

        //add new topics to this annotations topicList
        formValues.topicList = formValues.topicList.concat(newUniqueTopics);

        //add newTopics to formValues for posting to server
        formValues.newTopics = newUniqueTopics;

        //update the annotation form
        let select = updateTopicOptions(allTopics.topics);
        $("#annotation-topic-list").html(select);
      }

      //post the bookmark
      createAnnotaion(formValues);
  
      //reset form values - so another annotation can be submitted
      form.form("set values", {
        rangeStart: formValues.rangeStart,
        rangeEnd: formValues.rangeEnd
      });

      //set focus on rangeEnd
      document.getElementById("rangeEnd").focus();
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

      //Used by annotation modal next button
      gMaxId = parseInt($(".transcript p.cmiTranPara").length, 10) - 1;

      addBookMarkers();
      createBookmarkToggle(uiBookmarkToggle);
      net.getBookmarks()
        .then((response) => {
          if (response) {
            //mark each paragraph containing bookmarks
            for (let id in response) {
              $(`#p${--id} > i.bkmark.bookmark`).removeClass("outline");
            }
          }
        })
        .catch((error) => {
          console.error(error);
          notify.error("Unable to load bookmarks");
        });
    }

    //initialize bookmark list modal - available on all pages
    initBookmarkModal();
  },
  setAudioPlayer: function(player) {
    //console.log("Bookmark.setAudioPlayer()");
    audioPlayer = player;

    //enable annotation modal play/pause button
    $(".annotate-play").removeClass("disabled");

    //ask to be notified for audio paragraph change
    registerNotify(function(pid) {
      console.log("audio paragraph change to: ", pid);
    });
  }
};
