/* eslint no-console: off */
import {SourceStore, storeInit} from "common/modules/_util/store";
import {initHomePage} from "common/modules/_page/startup";
import search from "common/modules/_search/search";
import {showTOC, showQuotes, showSearch} from "common/modules/_util/url";
import {initialize as initNotes} from "common/modules/_page/notes";
import {initQuoteDisplay} from "common/modules/_topics/events";

//teaching specific modules
import {setEnv} from "./modules/_config/config";
import toc from "./modules/_contents/toc";
import {pageDriver} from "./modules/_util/driver";
import { noteInfo } from "./notes";

import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  //setup of configuration
  setEnv(store);

  //initial setup of home page
  initHomePage(store, pageDriver);
  toc.initialize("page");

  //add features
  search.initialize(store);

  //support for quote display and sharing
  initQuoteDisplay("#show-quote-button", store);

  //Study suggestions
  initNotes(noteInfo);

  //if url contains ?tocbook=[ack | book1 | book2] then show TOC on page load
  showTOC();

  //look for ?search=1 on url, if found display search dialog
  showSearch();

  //look for ?quotes=1 on url, if found display quote dialog
  showQuotes();
});

