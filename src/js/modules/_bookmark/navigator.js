
import {getPageInfo} from "../_config/config";
import intersection from "lodash/intersection";
import range from "lodash/range";
import store from "store";
import scroll from "scroll-into-view";
import {getUserInfo} from "../_user/netlify";
import notify from "toastr";

//import {getSourceId, genPageKey} from "../_config/key";
const transcript = require("../_config/key");

let gPageKey;

function generateHorizontalList(listArray) {
  if (!listArray || listArray.length === 0) {
    return "No Topics";
  }

  return `
    <div class="ui horizontal bulleted list">
      ${listArray.map((item) => `
        <div class="item">
          <em>${typeof item === "object"? item.topic: item}</em>
        </div>
      `).join("")}
    </div>
  `;
}

/*
  generate html for annotation
  args: annotation - annotation object
        topics - filter array

  if topics.length > 0 then generate html only for
  annotations that have topics found in the filter array
*/
function generateAnnotation(annotation, topics = []) {
  let match;

  //convert annotation topics list into string array
  let topicList = annotation.topicList.map((topic) => {
    if (typeof topic === "object") {
      return topic.value;
    }
    return topic;
  });

  if (topics.length > 0) {
    match = intersection(topicList, topics);
  }

  if (topics.length === 0 || match.length > 0) {
    return `
      <div class="item"> <!-- item: ${annotation.rangeStart}/${annotation.rangeEnd} -->
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">
            ${generateHorizontalList(annotation.topicList)}
          </div>
          <div class="description">
            <a data-aid="${annotation.aid}" class="annotation-item" data-range="${annotation.rangeStart}/${annotation.rangeEnd}">   
              ${annotation.Comment?annotation.Comment:"No Comment"}
            </a>
          </div>
        </div>
      </div> <!-- item: ${annotation.rangeStart}/${annotation.rangeEnd} -->
    `;
  }
  else {
    return `<!-- annotation filtered: ${topics.join(" ")} -->`;
  }
}

function generateBookmark(actualPid, bkmk, topics) {
  return `
    <div class="ui list">
      <div class="item">
        <i class="bookmark icon"></i>
        <div class="content">
          <div class="header">
            Paragraph: ${actualPid}
          </div>
          <div class="list">
            ${bkmk.map((annotation) => `
              ${generateAnnotation(annotation, topics)}
            `).join("")}
          </div>
        </div>
      </div>
    </div>
 `;
}

function getNextPageUrl(pos, pageList, filterList, bookmarks) {
  if (pos > pageList.length) {
    return Promise.resolve(null);
  }

  let found = false;
  let pagePos;
  let pid;

  outer: for(pagePos = pos; pagePos < pageList.length; pagePos++) {
    let pageMarks = bookmarks[pageList[pagePos]];
    for(pid in pageMarks) {
      for(let a = 0; a < pageMarks[pid].length; a++) {
        //no filter in effect
        if (!filterList || filterList.length === 0) {
          found = true;
          break outer;
        }
        else {
          let match = intersection(filterList, pageMarks[pid][a].topicList || []);
          if (match.length > 0) {
            found = true;
            break outer;
          }
        }
      }
    }
  }

  return new Promise((resolve, reject) => {
    //we found a bookmark
    if (found) {
      let pageKey = pageList[pagePos];
      getPageInfo(pageKey)
        .then((info) => {
          //convert from key to paragraph id
          let paragraphId = (parseInt(pid, 10) - 1).toString(10);
          let url = `${info.url}?bkmk=p${paragraphId}`;
          resolve(url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    else {
      resolve(null);
    }
  });
}

function getPrevPageUrl(pos, pageList, filterList, bookmarks) {
  if (pos < 0) {
    return Promise.resolve(null);
  }

  let found = false;
  let pagePos;
  let pid;

  outer: for(pagePos = pos; pagePos >= 0; pagePos--) {
    let pageMarks = bookmarks[pageList[pagePos]];
    for(pid in pageMarks) {
      for(let a = 0; a < pageMarks[pid].length; a++) {
        //no filter in effect
        if (!filterList || filterList.length === 0) {
          found = true;
          break outer;
        }
        else {
          let match = intersection(filterList, pageMarks[pid][a].topicList || []);
          if (match.length > 0) {
            found = true;
            break outer;
          }
        }
      }
    }
  }

  return new Promise((resolve, reject) => {
    //we found a bookmark
    if (found) {
      let pageKey = pageList[pagePos];
      getPageInfo(pageKey)
        .then((info) => {
          //convert from key to paragraph id
          let paragraphId = (parseInt(pid, 10) - 1).toString(10);
          let url = `${info.url}?bkmk=p${paragraphId}`;
          // console.log("getPrev() found: %o", bookmarks[pageList[pagePos]][pid]);
          // console.log("url prev: %s", url);
          resolve(url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    else {
      resolve(null);
    }
  });
}

function getNextPrevUrl(pageKey, bookmarks, bmModal) {
  let pages = Object.keys(bookmarks);
  let pos = pages.indexOf("lastFetchDate");
  let urls = {next: null, prev: null};

  if (pos > -1) {
    pages.splice(pos, 1);
  }

  pos = pages.indexOf(pageKey);
  if (pos === -1) {
    return urls;
  }

  console.log("current page: %s", pageKey);
  let nextPromise = getNextPageUrl(pos + 1, pages, bmModal["modal"].topics, bookmarks);
  let prevPromise = getPrevPageUrl(pos - 1, pages, bmModal["modal"].topics, bookmarks);

  return Promise.all([prevPromise, nextPromise]);
}

/*
  Given the postion (currentPos) in pageMarks of the current pid, find the previous
  one. Return the actualPid or null.

  Omit bookmarks that don't have at least one topic found in topics[]. If topics[]
  has no data then no filtering is done.

  args:
    currentPos - position in pageMarks of the current paragraph
    pageMarks - an array of paragraph keys with bookmarks
    pageBookmarks - bookmarks found on the page
    topics - an array of topics by which to filter bookmarks
*/
function getPreviousPid(currentPos, pageMarks, pageBookmarks, topics) {

  //there is no previous bookmark
  if (currentPos < 1) {
    return null;
  }

  //no filtering
  if (topics.length === 0) {
    return `p${(parseInt(pageMarks[currentPos - 1], 10) - 1).toString(10)}`;
  }
  else {
    //topic filtering - look through all previous paragraphs for the first one
    //containing an annotation found in topics[]
    for (let newPos = currentPos - 1; newPos >= 0; newPos--) {
      let bookmark = pageBookmarks[pageMarks[newPos]];
      for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].topicList && bookmark[i].topicList.length > 0) {
          if (intersection(bookmark[i].topicList, topics).length > 0) {
            //we found a bookmark containing a topic in the topicList
            return `p${(parseInt(pageMarks[newPos], 10) - 1).toString(10)}`;
          }
        }
      }
    }

    //there are no remaining bookmarks with a topic in topics
    return null;
  }
}

/*
  Given the postion (currentPos) in pageMarks of the current pid, find the next
  one. Return the actualPid or null.

  Omit bookmarks that don't have at least one topic found in topics[]. If topics[]
  has no data then no filtering is done.

  args:
    currentPos - position in pageMarks of the current paragraph
    pageMarks - an array of paragraph keys with bookmarks
    pageBookmarks - bookmarks found on the page
    topics - an array of topics by which to filter bookmarks
*/
function getNextPid(currentPos, pageMarks, pageBookmarks, topics) {

  //there is "no" next bookmark
  if ((currentPos + 1) === pageMarks.length) {
    return null;
  }

  //no filtering
  if (topics.length === 0) {
    return `p${(parseInt(pageMarks[currentPos + 1], 10) - 1).toString(10)}`;
  }
  else {
    //topic filtering - look through all previous paragraphs for the first one
    //containing an annotation found in topics[]
    for (let newPos = currentPos + 1; newPos <= pageBookmarks.length; newPos++) {
      let bookmark = pageBookmarks[pageMarks[newPos]];
      for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].topicList && bookmark[i].topicList.length > 0) {
          if (intersection(bookmark[i].topicList, topics).length > 0) {
            //we found a bookmark containing a topic in the topicList
            return `p${(parseInt(pageMarks[newPos], 10) - 1).toString(10)}`;
          }
        }
      }
    }

    //there are no remaining bookmarks with a topic in topics
    return null;
  }
}

/*
  args: pageKey - identifies the current page
        pid - paragraph id
        allBookmarks - an array of all bookmarks
        bmModal - contains topics for filtering
        whoCalled - when the function is called by a click handler the value is
                    either "previous" or "next". When "previous", a new value
                    for previous bookmark needs to be determind, ditto for "next"

  Note: the value of pid is the actual paragraph id and not the key which is pid + 1.
  Bookmark info is stored according to key so we increment the pid to access the data
*/
function getCurrentBookmark(pageKey, actualPid, allBookmarks, bmModal, whoCalled) {
  let pidKey;
  let topics = [];
  
  if (bmModal["modal"].filter) {
    topics = bmModal["modal"].topics;
  }

  //convert pid to key in bookmark array
  pidKey = (parseInt(actualPid.substr(1), 10) + 1).toString(10);

  let paragraphBookmarks = allBookmarks[pageKey][pidKey];

  let html = generateBookmark(actualPid, paragraphBookmarks, topics);
  $("#bookmark-content").html(html);

  //get links to next and previous bookmarks on the page
  let pageMarks = Object.keys(allBookmarks[pageKey]);
  let pos = pageMarks.indexOf(pidKey);

  //if topic filtering is enabled 
  let prevActualPid;
  let nextActualPid;

  prevActualPid = getPreviousPid(pos, pageMarks, allBookmarks[pageKey], topics);
  nextActualPid = getNextPid(pos, pageMarks, allBookmarks[pageKey], topics);
  $(".bookmark-navigator .current-bookmark").attr("data-pid", `${actualPid}`);

  //console.log("prev: %s, next: %s", prevActualPid, nextActualPid);

  //set previous to inactive
  if (!prevActualPid) {
    $(".bookmark-navigator .previous-bookmark").addClass("inactive");
    $(".bookmark-navigator .previous-bookmark").html("<i class='up arrow icon'></i> Previous");
  }
  else {
    //add data-pid attribute to link for previous bkmk
    $(".bookmark-navigator .previous-bookmark").attr("data-pid", prevActualPid);
    $(".bookmark-navigator .previous-bookmark").removeClass("inactive");
    $(".bookmark-navigator .previous-bookmark").html(`<i class="up arrow icon"></i> Previous (${prevActualPid})`);
  }

  if (!nextActualPid) {
    $(".bookmark-navigator .next-bookmark").addClass("inactive");
    $(".bookmark-navigator .next-bookmark").html("<i class='down arrow icon'></i> Next");
  }
  else {
    //add data-pid attribute to link for next bkmk
    $(".bookmark-navigator .next-bookmark").attr("data-pid", nextActualPid);
    $(".bookmark-navigator .next-bookmark").removeClass("inactive");
    $(".bookmark-navigator .next-bookmark").html(`<i class="down arrow icon"></i> Next (${nextActualPid})`);
  }
}

/*
  Setup the bookmark navigator for the page.
  arg: pid - paragraph id.
*/
function bookmarkManager(actualPid) {
  let sourceId = transcript.getSourceId();
  let pageKey = transcript.genPageKey().toString(10);
  let bmList = store.get(`bmList_${sourceId}`);
  let bmModal = store.get(`bmModal_${sourceId}`);

  if (bmList) {
    //store globally
    gPageKey = pageKey;

    //get previous and next url's
    getNextPrevUrl(pageKey, bmList, bmModal)
      .then((responses) => {
        //console.log("next url: ", responses);

        //set prev and next hrefs
        if (responses[0] !== null) {
          $(".bookmark-navigator .previous-page").attr("href", responses[0]);
        }
        else {
          $(".bookmark-navigator .previous-page").addClass("inactive");
        }
        if (responses[1] !== null) {
          $(".bookmark-navigator .next-page").attr("href", responses[1]);
        }
        else {
          $(".bookmark-navigator .next-page").addClass("inactive");
        }

        //identify current bookmark in navigator
        getCurrentBookmark(pageKey, actualPid, bmList, bmModal, "both");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  else {
    console.log(`bmList_${sourceId}`);
  }
}

/*
  Update previous and next bookmark links on navigator. 

  args:
    pid: the actual pid to display
    update: either "previous", or "next" depending on what click handler called the function
*/
function updateNavigator(pid, update) {
  let bmList = store.get(`bmList_${transcript.getSourceId()}`);
  let bmModal = store.get(`bmModal_${transcript.getSourceId()}`);
  getCurrentBookmark(gPageKey, pid, bmList, bmModal, update);
}

function clearSelectedAnnotation() {
  $(".selected-annotation-wrapper > .header").remove();
  $(".selected-annotation").unwrap();
  $(".selected-annotation").removeClass("selected-annotation");
  $(".bookmark-selected-text.show").removeClass("show");
}

function initClickListeners() {
  //previous bookmark
  $(".bookmark-navigator .previous-bookmark").on("click", function(e) {
    e.preventDefault();
    clearSelectedAnnotation();

    let actualPid = $(this).attr("data-pid");
    scroll(document.getElementById(actualPid), {align: {top: 0.2}});
    updateNavigator(actualPid, "previous");
  });

  $(".bookmark-navigator .next-bookmark").on("click", function(e) {
    e.preventDefault();
    clearSelectedAnnotation();

    let actualPid = $(this).attr("data-pid");
    scroll(document.getElementById(actualPid), {align: {top: 0.2}});
    updateNavigator(actualPid, "next");
  });

  $(".bookmark-navigator .current-bookmark").on("click", function(e) {
    e.preventDefault();

    let actualPid = $(this).attr("data-pid");
    scroll(document.getElementById(actualPid), {align: {top: 0.2}});
  });

  $(".bookmark-navigator .close-window").on("click", function(e) {
    e.preventDefault();
    clearSelectedAnnotation();

    $(".bookmark-navigator-wrapper").addClass("hide-bookmark-navigator");
    $(".transcript").removeClass("bookmark-navigator-active");
  });

  //share icon click handler
  $(".transcript").on("click", ".selected-annotation-wrapper .share-annotation", function(e) {
    e.preventDefault();
    let annotation = $(".selected-annotation-wrapper mark.show");
    let userInfo;
    let pid, aid, text;

    //no highlighted text
    if (annotation.length === 0) {
      return;
    }

    userInfo = getUserInfo();
    if (!userInfo) {
      notify.info("You must be signed in to share selected text");
      return;
    }

    pid = $(".selected-annotation-wrapper p").attr("id");
    aid = annotation.data("aid");
    text = annotation.text().replace(/\n/," ");
    
    let url = `https://wom.christmind.info${location.pathname}?as=${pid}:${aid}:${userInfo.userId}`;
    let channel = $(this).hasClass("facebook")?"facebook":"email";

    // console.log("url: %s", url);
    // console.log("quote: %s", text);
    // console.log("share to: %s", channel);

    if (channel === "facebook") {
      let options = {
        method: "share",
        hashtag: "#christmind",
        quote: text,
        href: url
      };
      FB.ui(options, function(){});
    }
    else if (channel === "email") {
      notify.info("Sharing by email is not ready yet.");
    }
  });

  //highlights an annotation by wrapping it in a segment
  $(".bookmark-navigator").on("click", ".annotation-item", function(e) {
    e.preventDefault();
    clearSelectedAnnotation();

    let aid = $(this).attr("data-aid");
    let dataRange = $(this).attr("data-range");
    let rangeArray = dataRange.split("/");
    let numericRange = rangeArray.map((r) => parseInt(r.substr(1),10));
    let annotationRange = range(numericRange[0], numericRange[1] + 1);
    let header = `
      <h4 class="ui header">
        <i title="Share to Facebook" class="share-annotation facebook small icon"></i>
        <i title="Share via email" class="share-annotation envelope outline small icon"></i>
        <div class="content">
          ${$(this).text()}
        </div>
      </h4>
    `;

    for (let i = 0; i < annotationRange.length; i++) {
      $(`#p${annotationRange[i]}`).addClass("selected-annotation");
    }

    $(".selected-annotation").wrapAll("<div class='selected-annotation-wrapper ui raised segment'></div>");
    $(".selected-annotation-wrapper").prepend(header);

    if (aid !== "undefined") {
      $(`[data-annotation-id="${aid}"]`).addClass("show");
    }
  });
}

/*
  User clicked a bookmark link in the bookmark list modal.

  Initialize the bookmark navigator so they can follow the list of bookmarks
*/
export function initNavigator(actualPid) {
  //show the navigator
  $(".bookmark-navigator-wrapper").removeClass("hide-bookmark-navigator");
  bookmarkManager(actualPid);
  initClickListeners();

  //indicate bookmark navigator is active by adding class to ./transcript
  $(".transcript").addClass("bookmark-navigator-active");
}
