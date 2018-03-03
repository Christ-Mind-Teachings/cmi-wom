
//bookmark modal
const uiBookmarkModal = ".bookmark.ui.modal";
const uiOpenBookmarkModal = ".bookmark-modal-open";
const uiModalOpacity = 0.5;
const uiBookmarkToggle = ".bookmark-toggle";
//const uiBookmarkModalDiv = ".cmi-bookmark-list";

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

/*
 * Add bookmark icons to paragraphs on transcript pages
 * - this will not do anything when called on non-transcript
 *   pages
 */
function addBookMarkers() {
  $("p.cmiTranPara").each(function() {
    $(this).prepend("<i class='bkmark bkmark-hide bookmark outline icon'></i>");
  });
}

/*
 * show/hide paragraph bookmarks
 *
 */
function createBookmarkToggle(selector) {
  $(selector).on("click", function() {
    $("p.cmiTranPara > i.bkmark").each(function() {
      if ($(this).hasClass("bkmark-hide")) {
        $(this).removeClass("bkmark-hide");
      }
      else {
        $(this).addClass("bkmark-hide");
      }
    });
  });
}

export default {
  initialize: function() {
    addBookMarkers();
    initBookmarkModal();
    createBookmarkToggle(uiBookmarkToggle);
  }

};
