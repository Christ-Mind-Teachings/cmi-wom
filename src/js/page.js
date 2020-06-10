/* eslint no-console: off */

//common modules
import auth from "www/modules/_user/netlify";
import {initStickyMenu, initAnimation} from "www/modules/_page/startup";
import {initialize as initNotes} from "www/modules/_page/notes";
import {showTOC} from "www/modules/_util/url";
import {setLanguage} from "www/modules/_language/lang";

//teaching specific modules
import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc from "./modules/_contents/toc";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  initStickyMenu();

  setLanguage(constants);
  bookmarkStart("page");
  search.initialize();
  auth.initialize();
  toc.initialize("page");
  initNotes(noteInfo);
  about.initialize();

  initAnimation();
  showTOC();
});

