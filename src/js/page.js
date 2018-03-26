/* eslint no-console: off */

import "../vendor/semantic/semantic.min.js";
import {showParagraph} from "./modules/_util/url";
import bookmark from "./modules/_bookmark/bookmark";
import search from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
import auth from "./modules/_user/netlify";
import {loadConfig} from "./modules/_config/config";

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
});
