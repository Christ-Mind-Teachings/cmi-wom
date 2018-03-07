/* eslint no-console: off */

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

//import "../vendor/semantic/semantic.min.js";
window.semantic = require("../vendor/semantic/semantic.min.js");

import {showParagraph} from "./modules/url";
import bookmark from "./modules/bookmark";
import search from "./modules/_search/search";
import toc from "./modules/_contents/toc";
import auth from "./modules/_user/netlify";

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
  toc.initialize();
  auth.initialize();

});