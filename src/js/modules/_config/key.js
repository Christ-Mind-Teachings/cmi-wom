/*
  WOM: Transcript keys
  - first item is 1
  - a numeric value that represents a specific transcript and represents
    a specific logical ordering.

  - The integer part of the key represent a transcript and the decimal part
    a paragraph within the transcript.
  - The paragraphId is increased by 1 and divided by 1000

*/

import indexOf from "lodash/indexOf";
const sprintf = require("sprintf-js").sprintf;

const sourceId = 10;
const bookIds = ["xxx", "tjl", "wos", "early", "woh", "wot", "wok"];
const tjl = ["xxx", "ack", "foreword", "chap01", "chap02", "chap03", "chap04", "chap05", "chap06", "chap07", "chap08", "chap09", "chap10", "chap11", "chap12", "epilogue"];
const wos = ["xxx", "foreword", "preface", "chap01", "chap02", "chap03", "chap04", "afterwords", "epilogue", "prayer"];
const early = ["xxx", "ble", "c2s", "hoe", "ign", "com", "dbc", "dth", "fem", "gar", "hea", "hoa", "hsp", "joy1", "joy2", "lht", "moa", "mot", "wak", "wlk"];

function splitUrl(url) {
  let u = url;

  //remove leading and trailing "/"
  u = url.substr(1);
  u = u.substr(0, u.length - 1);

  return u.split("/");
}

function getUnitId(bid, unit) {
  switch(bid) {
    case "tjl":
      return indexOf(tjl, unit);
    case "wos":
      return indexOf(wos, unit);
    case "woh":
    case "wot":
    case "wok":
      return parseInt(unit.substr(1), 10);
    case "early":
      return indexOf(early, unit);
    default:
      throw new Error(`unexpected bookId: ${bid}`);
  }
}

/*
  Convert url into key
  returns -1 for non-transcript url

  key format: ssbuuIqq.ppp
  where: ss: source Id
          b: book Id
         uu: unit Id
          I: quesiton indicator, 0:no questions 1:questions
         qq: question Id
        ppp: paragraph number - not positional

*/
export function genPageKey(url = location.pathname) {
  let key = {
    sid: sourceId,
    bid: 0,
    uid: 0,
    hasQuestions: 0,
    qid: 0
  };

  let parts = splitUrl(url);

  key.bid = indexOf(bookIds, parts[0]);
  if (key.bid === -1) {
    return -1;
  }
  key.uid = getUnitId(parts[0], parts[1]);
  if (key.bid === -1) {
    return -1;
  }

  if (parts.length === 3) {
    key.hasQuestions = 1;
    key.qid = parseInt(parts[2].substr(1), 10);
  }

  let compositeKey = sprintf("%02s%01s%02s%1s%02s", key.sid, key.bid, key.uid, key.hasQuestions, key.qid);
  let numericKey = parseInt(compositeKey, 10);

  return numericKey;
}

/* 
  genParagraphKey(paragraphId, key: url || pageKey) 

  args:
    pid: a string representing a transcript paragraph, starts as "p0"..."pnnn"
         - it's converted to number and incremented by 1 then divided by 1000

    key: either a url or pageKey returned from genKey()
*/
export function genParagraphKey(pid, key = location.pathname) {
  let numericKey = key;
  const pKey = (parseInt(pid.substr(1), 10) + 1) / 1000;

  //if key is a string it represents a url
  if (typeof key === "string") {
    numericKey = genPageKey(key);
  }

  let paragraphKey = numericKey + pKey;

  return paragraphKey;
}

