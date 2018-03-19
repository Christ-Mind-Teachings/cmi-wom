import store from "store";
import axios from "axios";

//mp3 and audio timing base directories
const audioBase ="https://s3.amazonaws.com/assets.christmind.info/wom/audio";
const timingBase = "/public/timing";

//location of configuration files
const configUrl = "/public/config";

//the current configuration, initially null, assigned by getConfig()
let config;
let timingData;

function requestConfiguration(url) {
  return axios.get(url);
}

/* 
  check if config has changed since we last stored it
*/
function refreshNeeded(bid, fetchDate) {
  //values of lastChanged are loaded from webpack
  const lastChanged = {
    woh: WOH_CONFIG,
    wot: WOT_CONFIG,
    wok: WOK_CONFIG,
    wos: WOS_CONFIG,
    tjl: TJL_CONFIG,
    early: EARLY_CONFIG
  };

  if (lastChanged[bid] > fetchDate) {
    //console.log("Requesting %s config file", bid);
    return true;
  }

  return false;
}

/*
  Fetch audio timing data
*/
export function fetchTimingData(url) {
  return new Promise((resolve, reject) => {
    axios.get(`${timingBase}${url}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*
  We use book level configuration that is loaded by request via AJAX. Once
  loaded the config is persisted in local storage. A check is made for
  configuration data loaded from storage to determine if the data needs to
  be reloaded. This is indicated using Define-webpack-plugin to set the timestamp
  of configurations that have changed.
*/
export function getConfig(book) {
  return new Promise((resolve, reject) => {
    let cfg = store.get(`config-${book}`);
    let url;

    //if config in local storage check if we need to get a freash copy
    if (cfg && !refreshNeeded(cfg.bid, cfg.lastFetchDate)) {
      config = cfg;
      resolve(cfg);
    }

    //get config from server
    url = `${configUrl}/${book}.json`;
    requestConfiguration(url)
      .then((response) => {
        //add fetch date before storing
        response.data.lastFetchDate = Date.now();
        store.set(`config-${book}`, response.data);
        config = response.data;
        resolve(response.data);
      })
      .catch(() => {
        config = null;
        reject(`Config file: ${url} is not valid JSON`);
      });
  });
}

/*
  For transcript pages; load the configuration file.
  For non-transcript pages; configuration is loaded by getConfig()

  This is the same as getConfig() except it doesn't resolve passing the data
  but a message indicating source of the configuration file
*/
export function loadConfig(book) {
  return new Promise((resolve, reject) => {
    let cfg = store.get(`config-${book}`);
    let url;

    //if config in local storage check if we need to get a freash copy
    if (cfg && !refreshNeeded(cfg.bid, cfg.lastFetchDate)) {
      config = cfg;
      resolve("config read from cache");
    }

    //get config from server
    url = `${configUrl}/${book}.json`;
    requestConfiguration(url)
      .then((response) => {
        //add fetch date before storing
        response.data.lastFetchDate = Date.now();
        store.set(`config-${book}`, response.data);
        config = response.data;
        resolve("config fetched from server");
      })
      .catch((error) => {
        config = null;
        reject(`Config file: ${url} is not valid JSON`);
      });
  });

}

export function getAudioInfo(url) {
  //check that config has been initialized
  if (!config) {
    throw new Error("Configuration has not been initialized");
  }

  url = url.substr(1);
  url = url.substr(0, url.length - 1);

  let idx = url.split("/");

  //check the correct configuration file is loaded
  if (config.bid !== idx[0]) {
    throw new Error("Unexpected config file loaded; expecting %s but %s is loaded.", idx[0], config.bid);
  }

  //idx.length == 2 means page is a wom lesson, idx.length == 3 means it's a question
  let cIdx = parseInt(idx[1].substr(1), 10) - 1;
  let audioInfo;

  if (idx.length === 3) {
    let qIdx = parseInt(idx[2].substr(1), 10) - 1;
    //console.log("getAudioInfo(): cIdx: %s, qIdx: %s", cIdx, qIdx);

    audioInfo = config.contents[cIdx].questions[qIdx];
  }
  else {
    //console.log("getAudioInfo(): cIdx: %s", cIdx);
    audioInfo = config.contents[cIdx];
  }

  audioInfo.audioBase = audioBase;
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