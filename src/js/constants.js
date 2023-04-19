/*
  Teaching specific data
*/

const keyInfo = require("./modules/_config/key");
import {getReservation, getAudioInfo, getPageInfo} from "./modules/_config/config";

const env = "integration";
const sid = "wom";
const lang = "en";
const title = "Way of Mastery";
const HOME_URI = `/t/${sid}`;

export default {
  sid: sid,
  env: env,
  lang: lang,
  url_prefix: HOME_URI,
  sourceId: 10,
  configUrl: `${HOME_URI}/public/config`,
  topicManagerId: "05399539cca9ac38db6db36f5c770ff1",
  quoteManagerId: "05399539cca9ac38db6db36f5c770ff1",
  quoteManagerName: "CMI",
  getPageInfo: getPageInfo,
  keyInfo: keyInfo,
  audio: {
    audioBase: `https://s3.amazonaws.com/assets.christmind.info/${sid}/audio`,
    timingBase: `${HOME_URI}/public/timing`,
    getReservation: getReservation,
    getAudioInfo: getAudioInfo
  },
  store: {
    bmList: "bm.list",
    topicList: "topic.list",
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
    cfgearly: "cfg.early",
    cfgtopics: "cfg.topics"
  }
};
