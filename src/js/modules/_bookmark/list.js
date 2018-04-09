/*
  Display list of bookmarks for user/source and allow for filtering by topic
*/

import {getKeyInfo, getSourceId} from "../_config/key";
import {getPageInfo} from "../_config/config";
import net from "./bmnet";
import store from "store";
import {getUserInfo} from "../_user/netlify";
import notify from "toastr";

const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;

let listInitialized = false;

function populateModal(bookmarks) {
  let html;

  console.log("bookmarks: %o", bookmarks);

  let info = [];
  for (let pageKey in bookmarks) {
    if (pageKey !== "lastFetchDate") {
      info.push(getPageInfo(pageKey, bookmarks[pageKey]));
    }
  }

  Promise.all(info)
    .then((responses) => {
      console.log("promis.all: ", responses);

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
