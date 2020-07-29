/*
  Teaching specific data
*/

const keyInfo = require("./modules/_config/key");
import {getPageInfo} from "./modules/_config/config";

export default {
  sid: "wom",
  sourceId: 10,
  quoteManagerId: "05399539cca9ac38db6db36f5c770ff1",
  quoteManagerName: "CMI",
  lang: "en",
  env: "integration",
  getPageInfo: getPageInfo,              //list
  keyInfo: keyInfo,                      //list, bmnet
  bm_modal_key: "bm.wom.modal",         //list
  bm_creation_state: "bm.wom.creation", //bookmark
  bm_list_store: "bm.wom.list",         //bmnet
  bm_topic_list: "bm.wom.topics",       //bmnet
  bm_modal_store: "bm.wom.modal",       //navigator
  url_prefix: "/t/wom",                  //navigator,
  store: {
    bmList: "bm.list",
    bmCreation: "bm.creation",
    bmTopics: "bm.topics",
    bmModal: "bm.modal"
  }
};
