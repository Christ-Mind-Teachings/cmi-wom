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

  NOTE: This module is used by code running in the browser and Node so the 
        common.js module system is used
*/

//import indexOf from "lodash/indexOf";
const sprintf = require("sprintf-js").sprintf;

//source id: each source has a unique id
const sourceId = 10;
const sid = "wom";
const prefix = "/t/wom";

//length of pageKey excluding decimal portion
const keyLength = 8;

const books = ["tjl", "wos", "early", "woh", "wot", "wok", "acq"];
const bookIds = ["xxx", ...books];
const acq = ["xxx", "welcome", "wom", "web"];
const tjl = ["xxx", "ack", "foreword", "chap01", "chap02", "chap03", "chap04", "chap05", "chap06", "chap07", "chap08", "chap09", "chap10", "chap11", "chap12", "epilogue"];
const wos = ["xxx", "foreword", "preface", "chap01", "chap02", "chap03", "chap04", "afterwords", "epilog", "prayer"];
const early = ["xxx", "ble", "c2s", "hoe", "ign", "com", "dbc", "dth", "fem", "gar", "hea", "hoi", "hsp", "joy1", "joy2", "lht", "moa", "mot", "wak", "wlk"];

const contents = {
  acq: acq,
  tjl: tjl,
  wos: wos,
  early: early
};

function splitUrl(url) {
  let u = url;

  //remove leading "/"
  u = url.substr(1);

  //remove trailing '/' if it exists
  if (u[u.length-1] === "/") {
    u = u.substr(0, u.length - 1);
  }

  return u.split("/");
}

/*
  return the position of unit in the bid array
*/
function getUnitId(bid, unit, fromKey = false) {
  if (bid === "woh" || bid === "wot" || bid === "wok") {
    return parseInt(unit.substr(1), 10);
  }

  if (contents[bid]) {
    return contents[bid].indexOf(unit);
  }
  else {
    throw new Error(`unexpected bookId: ${bid}`);
  }
}

/*
  Return the unit name given keys bid, uid
*/
function getUnitFromKey(bid, uid) {
  if (bid === "woh" || bid === "wot" || bid === "wok") {
    return sprintf("l%02s", uid);
  }

  if (contents[bid]) {
    return contents[bid][uid];
  }
  else {
    throw new Error(`unexpected bookId: ${bid}`);
  }
}

function getSourceId() {
  return sourceId;
}

function getKeyInfo() {
  return {
    sourceId: sourceId,
    keyLength: keyLength
  };
}

/*
  parse bookmarkId into pageKey and paragraphId
  - pid=0 indicates no paragraph id
*/
function parseKey(key) {
  const keyInfo = getKeyInfo();
  let keyString = key;
  let pid = 0;

  if (typeof keyString === "number") {
    keyString = key.toString(10);
  }

  let decimalPos = keyString.indexOf(".");

  //if no decimal key doesn't include paragraph id
  if (decimalPos > -1) {
    let decimalPart = keyString.substr(decimalPos + 1);

    //append 0's if decimal part < 3
    switch(decimalPart.length) {
      case 1:
        decimalPart = `${decimalPart}00`;
        break;
      case 2:
        decimalPart = `${decimalPart}0`;
        break;
    }
    pid = parseInt(decimalPart, 10);
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
function genPageKey(url = location.pathname) {
  let key = {
    sid: sourceId,
    bid: 0,
    uid: 0,
    hasQuestions: 0,
    qid: 0
  };

  let parts = splitUrl(url);

  //key.bid = indexOf(bookIds, parts[0]);
  key.bid = bookIds.indexOf(parts[2]);
  if (key.bid === -1) {
    return -1;
  }
  key.uid = getUnitId(parts[2], parts[3]);
  if (key.bid === -1) {
    return -1;
  }

  if (parts.length === 5) {
    key.hasQuestions = 1;
    key.qid = parseInt(parts[4].substr(1), 10);
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
        pid can also be a number so then we just increment it and divide by 1000

    key: either a url or pageKey returned from genPageKey(), if key
   is a string it is assumed to be a url
*/
function genParagraphKey(pid, key = location.pathname) {
  let numericKey = key;
  let pKey;

  if (typeof pid === "string") {
    pKey = (parseInt(pid.substr(1), 10) + 1) / 1000;
  }
  else {
    pKey = (pid + 1)/1000;
  }

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

  Added arg 'subtract' to prevent subtraction of uid and qid.
*/
function decodeKey(key, substract = true) {
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
    decodedKey.message = `Integer portion of key should have a length of ${keyLength}, key is: ${pageKeyString}`;
    return decodedKey;
  }

  let bid = parseInt(pageKeyString.substr(2,1), 10);
  decodedKey.bookId = bookIds[bid];

  //substract 1 from key value to get index
  // ** don't know why we subtract from uid and quid **
  // ** genPageKey() doesn't add **
  if (substract) {
    //subtract 1 from key value to get index
    decodedKey.uid = parseInt(pageKeyString.substr(3,2), 10) - 1;
    decodedKey.qid = parseInt(pageKeyString.substr(6,2), 10) - 1;
  }
  else {
    decodedKey.uid = parseInt(pageKeyString.substr(3,2), 10);
    decodedKey.qid = parseInt(pageKeyString.substr(6,2), 10);
  }

  decodedKey.hasQuestions = pageKeyString.substr(5,1) === "1";

  return decodedKey;
}

function getBooks() {
  return books;
}

/*
 * Convert page key to url, this is used to determine url of 
 *  note style bookmarks
 */
function getUrl(key, withPrefix = false) {
  //decode key but don't subtract one from uid and qid
  let decodedKey = decodeKey(key, false);
  let unit = "invalid";
  let question;
  let url = `/${decodedKey.bookId}`;

  if (decodedKey.error) {
    return "/invalid/key/";
  }

  unit = getUnitFromKey(decodedKey.bookId, decodedKey.uid);
  url = `${url}/${unit}/`;

  if (decodedKey.hasQuestions) {
    question = `q${decodedKey.qid}`;
    url = `${url}${question}/`;
  }

  if (withPrefix) {
    return `${prefix}${url}`;
  }

  return url;
}

/*
  Describe key in terms of source:book:unit:p
*/
function describeKey(key) {
  let decodedKey = decodeKey(key, false);

  if (decodedKey.error) {
    return {key: key, error: true, source: sid};
  }

  let info = {
    key: key,
    source: sid,
    book: decodedKey.bookId
  };

  info.unit = getUnitFromKey(decodedKey.bookId, decodedKey.uid);

  if (decodedKey.hasQuestions) {
    info.question = `q${decodedKey.qid}`;
  }


  if (decodedKey.pid > -1) {
    info.pid = `p${decodedKey.pid}`;
  }

  return info;
}

module.exports = {
  getBooks: getBooks,
  getSourceId: getSourceId,
  getKeyInfo: getKeyInfo,
  getUrl: getUrl,
  parseKey: parseKey,
  genPageKey: genPageKey,
  genParagraphKey: genParagraphKey,
  decodeKey: decodeKey,
  describeKey: describeKey
};
