/* eslint no-console: off */

import "../vendor/semantic/semantic.min.js";
import {showParagraph} from "./modules/_util/url";
import bookmark from "./modules/bookmark";
import search from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
import auth from "./modules/_user/netlify";
import {loadConfig} from "./modules/config";

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
  bookmark.initialize();
  search.initialize();
  auth.initialize();
  toc.initialize();

  //load config file and do initializations that depend on a loaded config file
  /*
  loadConfig(getBookId())
    .then((source) => {
      console.log(source);
      toc.initialize();
    })
    .catch((error) => {
      //report error to the user - somehow
      console.error(error);
    });
    */
});