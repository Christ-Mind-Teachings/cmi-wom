/* eslint no-console: off */
import {storeInit} from "www/modules/_util/store";
import {showTOC, showQuotes, showSearch} from "www/modules/_util/url";

//common modules
import auth from "www/modules/_user/netlify";
import {initStickyMenu, initAnimation} from "www/modules/_page/startup";
import {initialize as initNotes} from "www/modules/_page/notes";
import {setLanguage} from "www/modules/_language/lang";

import fb from "www/modules/_util/facebook";
import {initQuoteDisplay} from "www/modules/_topics/events";

//teaching specific modules
import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc from "./modules/_contents/toc";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  storeInit(constants);
  initStickyMenu();

  setLanguage(constants);
  bookmarkStart("page");
  auth.initialize();
  search.initialize();
  fb.initialize();
  toc.initialize("page");
  about.initialize();

  //support for quote display and sharing
  initQuoteDisplay("#show-quote-button", constants);
  //initQuoteDisplay("#book-quotes", constants);
  initAnimation("[animate]");

  initNotes(noteInfo);
  showTOC();

  //look for ?search=1 on url, if found display search dialog
  showSearch();

  //look for ?quotes=1 on url, if found display quote dialog
  showQuotes();
});

