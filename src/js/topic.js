/* eslint no-console: off */

import {SourceStore, storeInit} from "common/modules/_util/store";
import {getTopicList} from "common/modules/_topics/topics";
import search from "common/modules/_search/search";
import auth from "common/modules/_user/netlify";
import {initStickyMenu} from "common/modules/_page/startup";
import {transcriptHelpInit} from "common/modules/_page/help";

//teaching specific modules
import {setEnv, loadConfig} from "./modules/_config/config";
import toc, {getBookId} from "./modules/_contents/toc";
import constants from "./constants";

//This is called by WOM only, doesn't really belong here
function initTopicPage(si) {
  auth.initialize();
  initStickyMenu();
  transcriptHelpInit(si);
}

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  setEnv(store);
  initTopicPage(store);

  loadConfig(getBookId()).then(() => {
    search.initialize(store);
    toc.initialize("transcript");
    getTopicList(constants.topicManagerId, constants.keyInfo);
  }).catch((error) => {
    console.error(error);
  });
});
