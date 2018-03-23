/*
  WOM: Transcript keys
  - a numeric value that represents a specific transcript and represents
    a specific logical ordering.

  - The integer part of the key represent a transcript and the decimal part
    a paragraph within the transcript.
*/

import indexOf from "lodash/indexOf";
const sprintf = require("sprintf-js").sprintf;

const sourceId = 10;
const bookIds = ["tjl", "wos", "early", "woh", "wot", "wok"];
const tjl = ["ack", "foreword", "chap01", "chap02", "chap03", "chap04", "chap05", "chap06", "chap07", "chap08", "chap09", "chap10", "chap11", "chap12", "epilogue"];
const wos = ["foreword", "preface", "chap01", "chap02", "chap03", "chap04", "afterwords", "epilogue", "prayer"];
const early = ["ble", "c2s", "hoe", "ign", "com", "dbc", "dth", "fem", "gar", "hea", "hoa", "hsp", "joy1", "joy2", "lht", "moa", "mot", "wak", "wlk"];

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
      //lessons start from l01 so we subtract 1
      return parseInt(unit.substr(1), 10) - 1;
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
export function genKey(url = location.pathname) {
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
  console.log("key: %s = %s", url, compositeKey);

  return compositeKey;
}
