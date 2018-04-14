
import {getSourceId, genPageKey} from "../_config/key";
import {getPageInfo} from "../_config/config";
import intersection from "lodash/intersection";
import store from "store";
import scroll from "scroll-into-view";

let gPageKey;

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

function generateBookmark(pid, bkmk) {
  return `
    <div class="ui list">
      <div class="item">
        <i class="bookmark icon"></i>
        <div class="content">
          <div class="header">
            Paragraph: ${pid}
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
      </div>
    </div>
 `;
}

function getNextPageUrl(pos, pageList, filterList, bookmarks) {
  if (pos > pageList.length) {
    return Promise.resolve(null);
  }

  console.log("getNextPageUrl() filter: %o", filterList);

  let found = false;
  let pagePos;
  let pid;

  outer: for(pagePos = pos; pagePos < pageList.length; pagePos++) {
    let pageMarks = bookmarks[pageList[pagePos]];
    console.log("page: %s", pageList[pagePos]);
    for(pid in pageMarks) {
      console.log("pid: %s", pid);
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
          //console.log("getNextPageUrl() found: %o", bookmarks[pageList[pagePos]][pid]);
          //console.log("url next: %s", url);
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

  console.log("getPrevPageUrl() filter: %o", filterList);

  let found = false;
  let pagePos;
  let pid;

  outer: for(pagePos = pos; pagePos >= 0; pagePos--) {
    let pageMarks = bookmarks[pageList[pagePos]];
    console.log("page: %s", pageList[pagePos]);
    for(pid in pageMarks) {
      console.log("pid: %s", pid);
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

function getNextPrevUrl(pageKey, bookmarks) {
  let bmModal = store.get(`bmModal_${getSourceId()}`);
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
  args: pageKey - identifies the current page
        pid - paragraph id
        allBookmarks - an array of all bookmarks

  Note: the value of pid is the actual paragraph id and not the key which is pid + 1.
  Bookmark info is stored according to key so we increment the pid to access the data
*/
function getCurrentBookmark(pageKey, pid, allBookmarks) {
  let paragraphId;

  //convert pid to key in bookmark array
  paragraphId = (parseInt(pid.substr(1), 10) + 1).toString(10);

  let paragraphBookmarks = allBookmarks[pageKey][paragraphId];
  //console.log("%s bookmark: %o", paragraphId, paragraphBookmarks);

  let html = generateBookmark(pid, paragraphBookmarks);
  $("#bookmark-content").html(html);

  //set current
  $(".bookmark-navigator .current-bookmark").html(`<i class="asterisk icon"></i> Current (${pid})`);
  $(".bookmark-navigator .current-bookmark").attr("data-pid", `p${paragraphId}`);

  //get links to next and previous bookmarks on the page
  let pageMarks = Object.keys(allBookmarks[pageKey]);
  let pos = pageMarks.indexOf(paragraphId);

  //set previous to inactive
  if (pos === 0) {
    $(".bookmark-navigator .previous-bookmark").addClass("inactive");
    $(".bookmark-navigator .previous-bookmark").html("<i class='up arrow icon'></i> Previous");
  }
  else {
    //add data-pid attribute to link for previous bkmk
    let prevId = (parseInt(pageMarks[pos - 1], 10) - 1).toString(10);
    $(".bookmark-navigator .previous-bookmark").attr("data-pid", `p${prevId}`);
    $(".bookmark-navigator .previous-bookmark").removeClass("inactive");
    $(".bookmark-navigator .previous-bookmark").html(`<i class="up arrow icon"></i> Previous (p${prevId})`);
  }

  if (pos === pageMarks.length - 1) {
    $(".bookmark-navigator .next-bookmark").addClass("inactive");
    $(".bookmark-navigator .next-bookmark").html("<i class='down arrow icon'></i> Next");
  }
  else {
    //add data-pid attribute to link for next bkmk
    let nextId = (parseInt(pageMarks[pos + 1], 10) - 1).toString(10);
    $(".bookmark-navigator .next-bookmark").attr("data-pid", `p${nextId}`);
    $(".bookmark-navigator .next-bookmark").removeClass("inactive");
    $(".bookmark-navigator .next-bookmark").html(`<i class="down arrow icon"></i> Next (p${nextId})`);
  }

  console.log("current: %s, all: %o", paragraphId, pageMarks);
}

/*
  Setup the bookmark navigator for the page.

  arg: pid - paragraph id.
*/
function bookmarkManager(pid) {
  let pageKey = genPageKey().toString(10);
  let bmList = store.get(`bmList_${getSourceId()}`);

  if (bmList) {
    //store globally
    gPageKey = pageKey;

    //get previous and next url's
    getNextPrevUrl(pageKey, bmList)
      .then((responses) => {
        console.log("next url: ", responses);

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
        getCurrentBookmark(pageKey, pid, bmList);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  else {
    console.log("bmList_10 not found");
  }
}

function updateNavigator(pid) {
  let bmList = store.get(`bmList_${getSourceId()}`);
  getCurrentBookmark(gPageKey, pid, bmList);
}

function initClickListeners() {
  //previous bookmark
  $(".bookmark-navigator .previous-bookmark").on("click", function(e) {
    e.preventDefault();

    let pid = $(this).data("pid");
    scroll(document.getElementById(pid), {align: {top: 0.2}});
    updateNavigator(pid);
  });

  $(".bookmark-navigator .next-bookmark").on("click", function(e) {
    e.preventDefault();

    let pid = $(this).data("pid");
    scroll(document.getElementById(pid), {align: {top: 0.2}});
    updateNavigator(pid);
  });

  $(".bookmark-navigator .current-bookmark").on("click", function(e) {
    e.preventDefault();

    let pid = $(this).data("pid");
    scroll(document.getElementById(pid), {align: {top: 0.2}});
  });
}


/*
  User clicked a bookmark link in the bookmark list modal and had "following" option 
  enabled.

  Initialize the bookmark navigator so they can follow the list of bookmarks
*/
export function initNavigator(pid) {
  //show the navigator
  $(".bookmark-navigator-wrapper").removeClass("hide-bookmark-navigator");
  console.log("initNavigator: pid: %s", pid);
  bookmarkManager(pid);
  initClickListeners();
}
