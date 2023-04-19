import indexOf from "lodash/indexOf";

import {fetchConfiguration} from "common/modules/_ajax/config";

import {status} from "./status";
const transcript = require("./key");

//the current configuration, initially null, assigned by getConfig()
let g_sourceInfo;
let config;

/**
 * Get the configuration file for 'book'. If it's not found in
 * the cache (local storage) then get it from the server and 
 * save it in cache.
 *
 * @param {string} book - the book identifier
 * @param {boolean} assign - true if the config is to be assigned to global config variable
 * @returns {promise}
 */
export function getConfig(book, assign = true) {
  let lsKey = `cfg${book}`;
  let url = `${g_sourceInfo.configUrl}/${book}.json`;

  return new Promise((resolve, reject) => {
    fetchConfiguration(url, lsKey, status).then((resp) => {
      if (assign) {
        config = resp;
      }
      resolve(resp);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * Load the configuration file for 'book'. If it's not found in
 * the cache (local storage) then get it from the server and 
 * save it in cache.
 *
 * @param {string} book - the book identifier
 * @returns {promise}
 */
export function loadConfig(book) {
  let lsKey = `cfg${book}`;
  let url = `${g_sourceInfo.configUrl}/${book}.json`;

  //"book" is a single page, no configuration
  if (!book) {
    return Promise.resolve(false);
  }

  return new Promise((resolve, reject) => {
    fetchConfiguration(url, lsKey, status)
      .then((resp) => {
        config = resp;
        resolve(true);
      })
      .catch((error) => {
        config = null;
        console.error(error);
        reject(error);
      });
  });
}

export function getAudioInfo(url) {
  let audioInfo = {};

  //check that config has been initialized
  //- not always an error
  if (!config) {
    console.error("Configuration has not been initialized");
    return audioInfo;
  }

  //remove leading and trailing "/"
  url = url.substr(1);
  url = url.substr(0, url.length - 1);

  let idx = url.split("/");

  //check the correct configuration file is loaded
  if (config.bid !== idx[2]) {
    throw new Error("Unexpected config file loaded; expecting %s but %s is loaded.", idx[2], config.bid);
  }

  let cIdx;
  let lookup = ["hoe", "ign", "c2s", "ble", "com", "dbc", "dth", "fem", "gar", "hea", "hoa",
                "hsp", "joy1", "joy2", "lht", "moa", "mot", "wak", "wlk", "illusions", "easter",
                "freedom", "purpose", "pow", "toc", "light", "peace", "perception", "seeking",
                "shr", "doorway", "holyr", "teach"];
  let wos = ["foreword", "preface", "chap01", "chap02", "chap03", "chap04", "afterwords", "epilog", "prayer"];

  switch(idx[2]) {
    case "tjl":
      break;
    case "wos":
      cIdx = indexOf(wos, idx[3]);
      audioInfo = _getAudioInfo(idx, cIdx);
      break;
    case "early":
      cIdx = indexOf(lookup, idx[3]);
      audioInfo = _getAudioInfo(idx, cIdx);
      break;
    default:
      cIdx = parseInt(idx[3].substr(1), 10) - 1;
      audioInfo = _getAudioInfo(idx, cIdx);
      break;
  }

  audioInfo.audioBase = g_sourceInfo.audioBase;
  return audioInfo;
}

/*
 * get timer info for the current page
 */
export function getReservation(url) {
  let audioInfo = getAudioInfo(url);

  if (audioInfo.timer) {
    return audioInfo.timer;
  }

  return null;
}

/*
  Given a page key, return data from a config file

  returns: book title, page title, url and optionally subtitle.

  args:
    pageKey: a key uniquely identifying a transcript page
    data: optional, data that will be added to the result, used for convenience
*/
export function getPageInfo(pageKey, data = false) {
  let decodedKey = transcript.decodeKey(pageKey);
  let info = {pageKey: pageKey, source: g_sourceInfo.title, bookId: decodedKey.bookId};

  if (data) {
    info.data = data;
  }

  return new Promise((resolve, reject) => {
    //get configuration data specific to the bookId
    getConfig(decodedKey.bookId, false)
      .then((data) => {
        if (!data) {
          info.bookTitle = "Book Title Unknown";
          info.title = "Title Unknown";
          info.url = "";
        }
        else {
          info.bookTitle = data.title;

          let unit = data.contents[decodedKey.uid];
          if (!unit) {
            info.title = `Title not found, pageKey: ${pageKey}, decodedKey: ${decodedKey}`;
            info.title = "";
          }
          else {
            if (decodedKey.hasQuestions) {
              let question;

              //this shouldn't happen but did once due to test data that got indexed and later
              //deleted but the index remained and caused the code to fail. Took me a long time to
              //find the problem.
              if (decodedKey.qid >= unit.questions.length) {
                console.log("invalid pageKey: %s, specifies out of range qid", pageKey);
                console.log("decodedKey: %o", decodedKey);
                question = unit.questions[unit.questions.length - 1];
              }
              else {
                question = unit.questions[decodedKey.qid];
              }
              info.title = unit.title;
              info.subTitle = question.title;
              info.url = question.url;
            }
            else {
              info.title = unit.title;
              info.url = unit.url;
            }
          }

          resolve(info);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*
  get audio info from config file
*/
function _getAudioInfo(idx, cIdx) {
  let audioInfo;

  if (idx.length === 5) {
    let qIdx = parseInt(idx[4].substr(1), 10) - 1;
    audioInfo = config.contents[cIdx].questions[qIdx];
  }
  else {
    audioInfo = config.contents[cIdx];
  }
  return audioInfo ? audioInfo: {};
}

/*
 * Set environment to standalone or integrated
 */
export function setEnv(si) {
  g_sourceInfo = si;
}

