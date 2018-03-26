import axios from "axios";
import store from "store";
import { genKey } from "../_config/key";
import isEqual from "lodash/isEqual";
import findIndex from "lodash/findIndex";

//Index topics
const topicsEndPoint = "https://s3.amazonaws.com/assets.christmind.info/wom/topics.json";

/*
  return annotations for given paragraph
*/
export function getParagraphAnnotations(id) {
  const pageKey = genKey();
  const bookmarks = store.get(pageKey);

  if (!bookmarks) {
    return null;
  }

  //remove the 'p' from id
  id = id.substr(1);

  if (bookmarks[id]) {
    return bookmarks[id];
  }

  return null;
}

/*
  if user not logged in get bookmarks from local storage
  otherwise get them from the server

  NOTE: API call to server not implemented
*/
export function getBookmarks() {
  const pageKey = genKey();
  return new Promise((resolve, reject) => {
    const bookmarks = store.get(pageKey);
    resolve(bookmarks);
  });
}

/*
  if user logged in post bookmark to server
  In all cases write the bookmark to local storage

  args: pid: paragraph id
        bookmark: annotation object

  NOTE: API call to server not implemented
*/
export function postAnnotation(pid, bookmark) {
  const pageKey = genKey();

  //remove the 'p' in pid
  pid = pid.substr(1);

  //store bookmark locally
  let data = store.get(pageKey);

  //modified/edited bookmark when it has a creationDate attribute
  if (bookmark.creationDate) {
    //convert bookmark.creationDate to number
    bookmark.creationDate = parseInt(bookmark.creationDate, 10);

    if (!data[pid]) {
      throw new Error(`Expected bookmark ${pid} not found.`);
    }
    
    let index = findIndex(data[pid], a => a.creationDate === bookmark.creationDate);
    if (index === -1) {
      throw new Error(`Did not find annotation ${bookmark.creationDate} for pid ${pid}`);
    }

    //annotation was not modified so return
    if (isEqual(data[pid][index], bookmark)) {
      return;
    }
    else {
      data[pid][index] = bookmark;
    }
  }
  //new bookmark
  else {
    bookmark.creationDate = Date.now();

    if (!data) {
      data = {
        [pid]: [bookmark]
      };
    }
    else {
      if (data[pid]) {
        data[pid].push(bookmark);
      }
      else {
        data[pid] = [bookmark];
      }
    }
  }
  store.set(pageKey, data);
}

export function deleteBookmark(pid, aid) {
  const pageKey = genKey();

  //remove the 'p' in pid
  pid = pid.substr(1);

  let data = store.get(pageKey);
  if (!data) {
    throw new Error("Expect bookmark data not found in local storage");
  }

  let annotations = data[pid];
  if (!annotations) {
    throw new Error(`Expect annotations not found for pid ${pid}`);
  }

  //filter deleted annotation from array
  data[pid] = annotations.filter(a => a.creationDate !== aid);
  store.set(pageKey, data);

  //return number of annotations remaining for paragraph
  return data[pid].length;
}

export function getAnnotation(pid, aid) {
  const pageKey = genKey();

  //remove the 'p' in pid
  pid = pid.substr(1);

  let data = store.get(pageKey);
  if (!data) {
    throw new Error("Expected bookmark data not found in local storage");
  }

  if (!data[pid]) {
    throw new Error(`Expected annotations not found for pid ${pid}`);
  }

  //filter requested annotation from array
  let annotation = data[pid].filter(a => a.creationDate === aid);

  //return requested annotation
  return annotation[0];
}

/*
  Fetch Indexing topics
  args: force=true, get topics from server even when we have them cached

  topics are cached for 2 hours (1000 * 60sec * 60min * 2) before being requested
  from server
*/
export function fetchTopics(force=false) {
  //keep topics in cache for 2 hours
  const retentionTime = 60 * 1000 * 60 * 2;
  return new Promise((resolve, reject) => {
    if (!force) {
      let topics = store.get("topic-list");
      if (topics && topics.lastFetchDate && ((topics.lastFetchDate + retentionTime) > Date.now())) {
        //return data from cache
        console.log("topics read from cache");
        resolve(topics);
        return;
      }
    }
    axios.get(`${topicsEndPoint}`)
      .then((response) => {
        response.data.lastFetchDate = Date.now();
        console.log("topics returned from server");
        store.set("topic-list", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*
  add new topics to topic-list in application store
*/
export function addToTopicList(newTopics) {
  let topics = store.get("topic-list");
  let concatTopics = topics.topics.concat(newTopics);

  concatTopics.sort();
  topics.topics = concatTopics;
  store.set("topic-list", topics);

  return topics;
}
