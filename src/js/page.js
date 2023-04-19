/* eslint no-console: off */

import {SourceStore, storeInit} from "common/modules/_util/store";
import {showTOC, showQuotes, showSearch} from "common/modules/_util/url";
import search from "common/modules/_search/search";
import auth from "common/modules/_user/netlify";
import {initStickyMenu, initAnimation} from "common/modules/_page/startup";
import {initialize as initNotes} from "common/modules/_page/notes";
import fb from "common/modules/_util/facebook";
import {initQuoteDisplay} from "common/modules/_topics/events";
//import {setLanguage} from "common/modules/_language/lang";

//teaching specific modules
import {searchInit} from "./modules/_search/search";
import {bookmarkStart} from "./modules/_bookmark/start";
import {setEnv} from "./modules/_config/config";
import toc from "./modules/_contents/toc";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  //this is messy but got to do both of these
  const store = new SourceStore(constants);
  storeInit(constants);
  initStickyMenu();

  //do this first
  auth.initialize();
  setEnv(store);

  bookmarkStart("page", store);
  search.initialize(searchInit(store));

  fb.initialize();
  toc.initialize("page");
  about.initialize();

  //support for quote display and sharing
  initQuoteDisplay("#show-quote-button", constants);
  initAnimation("[animate]");
  initNotes(noteInfo);

  //if url contains ?tocbook=[ack | book1 | book2] then show TOC on page load
  showTOC();

  //look for ?search=1 on url, if found display search dialog
  showSearch();

  //look for ?quotes=1 on url, if found display quote dialog
  showQuotes();
});

