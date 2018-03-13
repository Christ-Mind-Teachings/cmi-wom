/* eslint no-console: off */

/*
  semantic requires jquery which is loaded used
  webpack.ProvidePlugin
*/
import "../vendor/semantic/semantic.min.js";

import {showParagraph} from "./modules/url";
import {loadConfig} from "./modules/config";
import bookmark from "./modules/bookmark";
import search from "./modules/_search/search";
import auth from "./modules/_user/netlify";
import toc, {getBookId} from "./modules/_contents/toc";
import audio from "./modules/_audio/audio";

/*
 * For all transcript paragraphs -
 *   That are not footnotes and that don't have class .omit
 *
 * Assign id="p + paragraph number" and class="cmiTranPara"
 *
 * This is used for bookmarks and audio playback and also represent
 * paragraphs that are indexed for search
 *
 * This code is specific to transcript pages but included in
 * common.js because bookmarks and playfromhere features depend
 * on paragraphs having class cmiTranPara.
 */
function labelParagraphs() {
  var count = 0;
  var omit = 0;
  var transcriptParagraphs = $(".transcript p");

  if (transcriptParagraphs.length === 0) {
    return;
  }

  transcriptParagraphs.each(function(idx) {
    //skip omitted paragraphs (they are omitted in the markdown file)
    if ($(this).hasClass("omit")) {
      omit++;
      return;
    }

    //skip footnote paragraphs
    if ($(this).parents("div.footnotes").length > 0) {
      //console.log("footnote paragraph");
      return;
    }
    count++;
    $(this).attr("id", "p" + idx).addClass("cmiTranPara");
  });

  //log number of not omitted paragraphs
  //-- used to verify search indexing
  console.log("page: number of paragraphs: %s", count + omit);
  //console.log("conf: number of paragraphs: %s", config.unit.pNum);
}

/*
  Fix main menu to top of page when scrolled
*/
function initStickyMenu() {
  // fix main menu to page on passing
  $(".main.menu").visibility({
    type: "fixed"
  });

  // show dropdown on hover
  $(".main.menu  .ui.dropdown").dropdown({
    on: "hover"
  });
}

$(document).ready(() => {

  initStickyMenu();
  labelParagraphs();
  showParagraph();
  bookmark.initialize();
  search.initialize();
  auth.initialize();

  //load config file and do initializations that depend on a loaded config file
  loadConfig(getBookId())
    .then((source) => {
      console.log(source);
      toc.initialize();
      audio.initialize();
    })
    .catch((error) => {
      //report error to the user - somehow
      console.error(error);
    });

});