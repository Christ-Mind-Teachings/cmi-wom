/*
  WOM: Transcript keys
  - first item starts with 1, not 0
  - a numeric value that represents a specific transcript and represents
    a specific logical ordering.

  - The integer part of the key represent a transcript and the decimal part
    a paragraph within the transcript.
  - The paragraphId is increased by 1 and divided by 1000

  key format: ssbuuIqq.ppp
  where: ss: source Id
          b: book Id
         uu: unit Id
          I: quesiton indicator, 0:no questions 1:questions
         qq: question Id
        ppp: paragraph number - not positional

*/

import indexOf from "lodash/indexOf";
const sprintf = require("sprintf-js").sprintf;

//source id: each source has a unique id
const sourceId = 10;

//length of pageKey excluding decimal portion
const keyLength = 8;

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

export function getSourceId() {
  return sourceId;
}

export function getKeyInfo() {
  return {
    sourceId: sourceId,
    keyLength: keyLength
  };
}

/*
  parse bookmarkId into pageKey and paragraphId
  - pid=0 indicates no paragraph id
*/
export function parseKey(key) {
  const keyInfo = getKeyInfo();
  let keyString = key;
  let pid = 0;

  if (typeof keyString === "number") {
    keyString = key.toString(10);
  }

  let decimalPos = keyString.indexOf(".");

  //if no decimal key doesn't include paragraph id
  if (decimalPos > -1) {
    pid = parseInt(keyString.substr(decimalPos + 1), 10);
  }
  let pageKey = parseInt(keyString.substr(0, keyInfo.keyLength), 10);

  return {pid, pageKey};
}

/*
  Convert url into key
  returns -1 for non-transcript url

  key format: ssbuuIqq.ppp
  where: ss: source Id
          b: book Id
         uu: unit Id
          I: question indicator, 0:no questions 1:questions
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

/*
  key format: ssbuuIqq.ppp
  where: ss: source Id
          b: book Id
         uu: unit Id
          I: question indicator, 0:no questions 1:questions
         qq: question Id
        ppp: paragraph number - not positional
*/
export function decodeKey(key) {
  let {pid, pageKey} = parseKey(key);
  let pageKeyString = pageKey.toString(10);
  let decodedKey = {
    error: 0,
    message: "ok",
    sid: sourceId,
    bookId: "",
    uid: 0,
    hasQuestions: false,
    qid: 0,
    pid: pid - 1
  };

  //error, invalid key length
  if (pageKeyString.length !== keyLength) {
    decodedKey.error = true;
    decodedKey.message = `Ingeger portion of key should have a length of ${keyLength}, key is: ${pageKeyString}`;
    return decodedKey;
  }

  let bid = parseInt(pageKeyString.substr(2,1), 10);
  decodedKey.bookId = bookIds[bid];

  //substract 1 from key value to get index
  decodedKey.uid = parseInt(pageKeyString.substr(3,2), 10) - 1;
  decodedKey.hasQuestions = pageKeyString.substr(5,1) === "1";

  //subtract 1 from key value to get index
  decodedKey.qid = parseInt(pageKeyString.substr(6,2), 10) - 1;

  return decodedKey;
}

