/* eslint no-console: off */

import {SourceStore, storeInit} from "common/modules/_util/store";
import {getTopicList} from "common/modules/_topics/topics";
import search from "common/modules/_search/search";
import auth from "common/modules/_user/netlify";
import {initTopicPage} from "common/modules/_page/startup";

//teaching specific modules
import {setEnv, loadConfig} from "./modules/_config/config";
import toc, {getBookId} from "./modules/_contents/toc";
import {searchInit} from "./modules/_search/search";
import about from "./modules/_about/about";
import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  auth.initialize();
  setEnv(store);
  initTopicPage();
  about.initialize();

  loadConfig(getBookId()).then(() => {
    search.initialize(searchInit(store));
    toc.initialize("transcript");
    getTopicList(constants.topicManagerId, constants.keyInfo);
  }).catch((error) => {
    console.error(error);
  });
});
