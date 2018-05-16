import {showAnnotation as showAnnotationRequest} from "../_util/url";
import {fetchBookmark} from "../_bookmark/bmnet";
import {highlight} from "../_bookmark/selection";
import range from "lodash/range";
import scroll from "scroll-into-view";

const key = require("../_config/key");

//highlights an annotation by wrapping it in a segment
function wrapRange(annotation) {
  let rangeArray = [annotation.rangeStart, annotation.rangeEnd];
  let numericRange = rangeArray.map((r) => parseInt(r.substr(1),10));
  let annotationRange = range(numericRange[0], numericRange[1] + 1);
  let header = `
    <h4 class="ui header">
      <div class="content">
        ${annotation.Comment}
      </div>
    </h4>
  `;

  for (let i = 0; i < annotationRange.length; i++) {
    $(`#p${annotationRange[i]}`).addClass("selected-annotation");
  }

  $(".selected-annotation").wrapAll("<div id='shared-annotation-wrapper' class='selected-annotation-wrapper ui raised segment'></div>");
  $(".selected-annotation-wrapper").prepend(header);

  //scroll into view
  scroll(document.getElementById("shared-annotation-wrapper"), {align: {top: 0.2}});
}

/*
  Display annotation requested by query parameter "as"
  ?as=pid:annotationId:userId
*/
function showAnnotation() {
  let info = showAnnotationRequest();

  if (!info) {
    return;
  }

  let [pid, aid, uid] = decodeURIComponent(info).split(":");
  // console.log("pid: %s, aid: %s, uid: %s", pid, aid, uid);

  //make sure pid exists
  if (!pid) {
    return;
  }

  if ($(`#${pid}`).length === 0) {
    // console.log("invalid pid: %s", pid);
    return;
  }

  let bookmarkId = key.genParagraphKey(pid);
  // console.log("bookmarkId: %s", bookmarkId);

  fetchBookmark(bookmarkId, uid)
    .then((response) => {
      //bookmark not found
      if (!response.Item) {
        // console.log("bookmark not found");
        return;
      }

      let bookmark = response.Item.bookmark;
      // console.log("bookmark from fetch: %o", bookmark);

      let annotation = bookmark.find((a) => a.creationDate.toString(10) === aid);

      if (!annotation) {
        // console.log("annotation not found");
        return;
      }
      // console.log("annotation: %o", annotation);

      let node = document.getElementById(annotation.rangeStart);
      highlight(annotation.selectedText, node);
      $(`[data-aid="${aid}"]`).addClass("shared");

      wrapRange(annotation);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default {
  initialize: function() {
    showAnnotation();
  }
};
