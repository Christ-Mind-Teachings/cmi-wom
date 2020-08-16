/*
  Teaching specific data
*/

const keyInfo = require("./modules/_config/key");
import {getPageInfo} from "./modules/_config/config";

export default {
  sid: "wom",
  env: "integration",
  lang: "en",
  url_prefix: "/t/wom",                  //navigator,
  sourceId: 10,
  quoteManagerId: "05399539cca9ac38db6db36f5c770ff1",
  quoteManagerName: "CMI",
  getPageInfo: getPageInfo,              //list
  keyInfo: keyInfo,                      //list, bmnet
  store: {
    bmList: "bm.list",
    bmCreation: "bm.creation",
    bmTopics: "bm.topics",
    bmModal: "bm.modal",
    srchResults: "srch.results",
    pnDisplay: "pn.display",
    cfgacq: "cfg.acq",
    cfgwoh: "cfg.woh",
    cfgwot: "cfg.wot",
    cfgwok: "cfg.wok",
    cfgwos: "cfg.wos",
    cfgtjl: "cfg.tjl",
    cfgearly: "cfg.early"
  }
};
