/* eslint no-console: off */
import {SourceStore, storeInit} from "www/modules/_util/store";
import {getTopicList} from "www/modules/_topics/topics";
import search from "www/modules/_search/search";

//common modules
import auth from "www/modules/_user/netlify";
import {initTopicPage} from "www/modules/_page/startup";
import {setLanguage} from "www/modules/_language/lang";

//why

//teaching specific modules
import {loadConfig} from "./modules/_config/config";
import toc, {getBookId} from "./modules/_contents/toc";
import {searchInit} from "./modules/_search/search";
import about from "./modules/_about/about";
import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);
  setLanguage(constants);

  initTopicPage();
  auth.initialize();
  about.initialize();

  loadConfig(getBookId()).then(() => {
    search.initialize(searchInit(store));
    toc.initialize("transcript");
    getTopicList(constants.topicManagerId, constants.keyInfo);
  }).catch((error) => {
    console.error(error);
  });
});
