/*
  Bookmark data implementation

  Bookmarks for signed in users are queried from and stored to the server. See the
  cmi-api/bookmark repository for API.

  For signed in users, when a transcript page is loaded bookmarks are queried from the server
  and stored locally. Bookmarks for users not signed in are stored only to lcoal storage.

  Operations for create, modify, and delete are performed locally and sent to the server
  for signed in users.
*/

import axios from "axios";
import store from "store";
import notify from "toastr";
import {getUserInfo} from "../_user/netlify";

import {parseKey, getKeyInfo, genPageKey, genParagraphKey } from "../_config/key";
import isEqual from "lodash/isEqual";
import findIndex from "lodash/findIndex";
import cloneDeep from "lodash/cloneDeep";

//Index topics
//const topicsEndPoint = "https://s3.amazonaws.com/assets.christmind.info/wom/topics.json";
const topicsEndPoint = "https://93e93isn03.execute-api.us-east-1.amazonaws.com/latest";

//Bookmark API
const bookmarkApi = "https://g2xugf4tl7.execute-api.us-east-1.amazonaws.com/latest";

/*
  Get bookmark for paragraph pid from local storage. All bookmarks for the page
  are loaded by getBookmarks() and stored locally. We don't need to fetch them again.

  args:
    pid: paragraph id

  Bookmarks are keyed by pageKey and paragraphId. Paragraph Id's start from zero
  but are incremented by one to form the key.

  Note: the Promise is used here because I initially went to the server each time a bookmark
  was requested. I don't do that anymore but haven't yet removed the Promise.
*/
function getBookmark(pid) {
  return new Promise((resolve, reject) => {
    const pageKey = genPageKey();
    //console.log("getBookmark(%s)", pid);

    const bookmarks = store.get(pageKey);

    if (bookmarks) {
      //generate id
      let id = parseInt(pid.substr(1), 10) + 1;

      if (bookmarks[id]) {
        resolve({bookmark: bookmarks[id]});
      }
    }
    //no bookmark found
    resolve({});
  });
}

/*
  if user not logged in get bookmarks from local storage
  otherwise get them from the server and store them locally
*/
function getBookmarks() {
  let pageKey = genPageKey();
  const userInfo = getUserInfo();

  return new Promise((resolve, reject) => {

    //get bookmarks from server
    if (userInfo) {
      axios.get(`${bookmarkApi}/bookmark/query/${userInfo.userId}/${pageKey}`)
        .then((response) => {

          //convert to local data structure and store locally 
          if (response.data.response) {
            let bookmarks = {};
            response.data.response.forEach((b) => {
              let key = parseKey(b.id);
              bookmarks[key.pid] = b.bookmark;
            });
            store.set(pageKey, bookmarks);
            resolve(bookmarks);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
    else {
      //get from local storage
      const bookmarks = store.get(pageKey);
      resolve(bookmarks);
    }
  });
}

/*
  if user not logged in get bookmarks from local storage
  otherwise get them from the server and store them locally
*/
function queryBookmarks(key) {
  const retentionTime = 1000 * 60 * 60 * 8; //eight hours of milliseconds
  const userInfo = getUserInfo();
  const keyInfo = getKeyInfo();

  return new Promise((resolve, reject) => {
    //get bookmarks from server
    if (userInfo) {
      //set if bookmarks are already in local storage
      let bookmarkList = store.get(`bmList_${keyInfo.sourceId}`);

      //don't query database - just return from local storage
      if (bookmarkList) {
        let expireDate = bookmarkList.lastFetchDate + retentionTime;

        if (Date.now() < expireDate) {
          //console.log("queryBookmarks: list from local store");
          resolve(bookmarkList);
          return;
        }
      }

      //get from the server
      axios.get(`${bookmarkApi}/bookmark/query/${userInfo.userId}/${key}`)
        .then((response) => {
          //convert to local data structure and store locally 
          if (response.data.response) {
            let bookmarks = {};
            response.data.response.forEach((b) => {
              let keyParts = parseKey(b.id);
              if (!bookmarks[keyParts.pageKey]) {
                bookmarks[keyParts.pageKey] = {};
              }
              bookmarks[keyParts.pageKey][keyParts.pid] = b.bookmark;
            });
            bookmarks.lastFetchDate = Date.now();
            store.set(`bmList_${keyInfo.sourceId}`, bookmarks);
            //console.log("queryBookmarks: list from server");
            resolve(bookmarks);
          }
        })
        .catch((err) => {
          reject(err);
          return;
        });
    }
    else {
      let sid = parseInt(keyInfo.sourceId, 10);
      let bookmarks = [];

      //build expected structure from local storage
      store.each((value, key) => {
        if (key.startsWith(sid)) {
          if (!bookmarks[key]) {
            bookmarks[key] = {};
          }
          bookmarks[key] = value;
        }
      });
      console.log("queryBookmarks: list from local store, user not signed in");
      resolve(bookmarks);
    }
  });
}

/*
  Persist annotation 
    - in local storage and to server if user is signed in

  args: annotation
*/
function postAnnotation(annotation) {
  //console.log("annotation: ", annotation);
  const pageKey = genPageKey();
  const userInfo = getUserInfo();

  let now = Date.now();

  //post to server
  if (userInfo) {
    //this is critical, things get messed up if we don't do this
    let serverAnnotation = cloneDeep(annotation);

    let postBody = {
      userId: userInfo.userId,
      bookmarkId: genParagraphKey(serverAnnotation.rangeStart, pageKey),
      annotationId: serverAnnotation.creationDate ? serverAnnotation.creationDate : now,
      annotation: serverAnnotation
    };

    axios.post(`${bookmarkApi}/bookmark/annotation`, postBody)
      .then((data) => {
        if (data.data.message !== "OK") {
          console.error(data.data.message);
          notify.error(data.data.message);
        }
      })
      .catch((err) => {
        console.error(`Error saving annotation: ${err}`);
        notify.error(`Error saving annotation: ${err}`);
      });
  }

  //store locally
  storeAnnotation(annotation, now);
}

/*
  Delete the annotation 'aid' for bookmark 'pid'
*/
function deleteAnnotation(pid, aid) {
  const pageKey = genPageKey();
  const userInfo = getUserInfo();

  //delete annotation from server
  if (userInfo) {
    let bookmarkId = genParagraphKey(pid, pageKey);

    axios.delete(`${bookmarkApi}/bookmark/annotation/${userInfo.userId}/${bookmarkId}/${aid}`)
      .then(() => {
        console.log("deleted annotation: %s/%s/%s", userInfo.userId, bookmarkId, aid);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return deleteLocalAnnotation(pid, aid);
}

/*
  When user is signed in the bookmark has been returned from the server
  and saved to local storage. We get the bookmark from there rather than 
  having to go back to the server.

  We get the bookmark from local storage when the user is not signed in also.
*/
function getAnnotation(pid, aid) {
  const pageKey = genPageKey();

  let data;
  let annotation;

  //remove the 'p' in pid
  pid = parseInt(pid.substr(1), 10) + 1;

  data = store.get(pageKey);
  if (!data) {
    throw new Error("Expected bookmark data not found in local storage");
  }

  if (!data[pid]) {
    throw new Error(`Expected annotations not found for pid ${pid}`);
  }

  //filter requested annotation from array
  annotation = data[pid].filter(a => a.creationDate === aid);

  //return requested annotation
  return annotation[0];
}

/*
  Fetch Indexing topics
  args: force=true, get topics from server even when we have them cached

  topics are cached for 2 hours (1000 * 60sec * 60min * 2) before being requested
  from server
*/
function fetchTopics() {
  const userInfo = getUserInfo();
  let topics = store.get("topic-list");

  //keep topics in cache for 2 hours
  const retentionTime = 60 * 1000 * 60 * 2;

  return new Promise((resolve, reject) => {
    //topics stored only in local store for users not signed in
    if (!userInfo) {
      //no topics created yet
      if (!topics) {
        topics = {
          lastFetchDate: 0,
          topics: []
        };
        store.set("topic-list", topics);
      }
      resolve(topics);
      return;
    }
    //user signed in
    else if (topics && ((topics.lastFetchDate + retentionTime) > Date.now())) {
      //return topics from cache
      resolve(topics);
      return;
    }

    let sourceId = getKeyInfo().sourceId.toString(10);

    //user signed in, we need to get topics from server
    axios.get(`${topicsEndPoint}/user/${userInfo.userId}/topics/${sourceId}`)
      .then((topicInfo) => {
        //console.log("topicInfo.data: ", topicInfo.data);
        topicInfo.data.lastFetchDate = Date.now();
        store.set("topic-list", topicInfo.data);
        resolve(topicInfo.data);
      })
      .catch((error) => {
        console.error("Error fetching topicList: ", error);
        reject(error);
      });
  });
}

/*
  add new topics to topic-list in application store
*/
function addToTopicList(newTopics) {
  let topics = store.get("topic-list");
  let concatTopics = topics.topics.concat(newTopics);

  //improve sort
  concatTopics.sort((a, b) => {
    let aValue, bValue;

    //objects have value and topic keys, sort them by topic
    if (typeof a === "object") {
      aValue = a.topic.toLowerCase();
    }
    else {
      aValue = a.toLowerCase();
    }

    if (typeof b === "object") {
      bValue = b.topic.toLowerCase();
    }
    else {
      bValue = b.toLowerCase();
    }

    if (aValue < bValue) {
      return -1;
    }

    if (aValue > bValue) {
      return 1;
    }

    return 0;
  });

  topics.topics = concatTopics;
  store.set("topic-list", topics);

  //add topics to server if user signed in
  let userInfo = getUserInfo();
  if (userInfo) {
    axios.post(`${topicsEndPoint}/user/topics`, {
      userId: userInfo.userId,
      sourceId: getKeyInfo.sourceId(),
      topicList: newTopics
    })
      .then((response) => {
        console.log(`addToTopicList: ${response}`);
      })
      .catch((err) => {
        console.error(`addToTopicList error: ${err}`);
      });
  }

  return topics;
}

/*
  store annotation locally
*/
function storeAnnotation(annotation, creationDate) {
  const pageKey = genPageKey();

  //make annotation key
  let pid = parseInt(annotation.rangeStart.substr(1), 10) + 1;

  //get bookmark for page
  let data = store.get(pageKey);

  //modified/edited bookmark when it has a creationDate attribute
  if (annotation.creationDate) {

    //convert bookmark.creationDate to number
    annotation.creationDate = parseInt(annotation.creationDate, 10);

    if (!data[pid]) {
      throw new Error(`Expected bookmark ${pid} not found.`);
    }
    
    //find the index of the annotation in the bookmark
    let index = findIndex(data[pid], a => a.creationDate === annotation.creationDate);
    if (index === -1) {
      throw new Error(`Did not find annotation ${annotation.creationDate} for pid ${pid}`);
    }

    //annotation was not modified so return
    if (isEqual(data[pid][index], annotation)) {
      return;
    }
    else {
      data[pid][index] = annotation;
    }
  }
  //new annotation
  else {
    annotation.creationDate = creationDate;

    if (!data) {
      data = {
        [pid]: [annotation]
      };
    }
    else {
      if (data[pid]) {
        data[pid].push(annotation);
      }
      else {
        data[pid] = [annotation];
      }
    }
  }
  store.set(pageKey, data);
}

/*
  delete local annotation

  args:
    pid: paragraph id
    aid: annotation id
*/
function deleteLocalAnnotation(pid, aid) {
  const pageKey = genPageKey();

  //make annotation id
  pid = parseInt(pid.substr(1), 10) + 1;

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

export default {
  addToTopicList: addToTopicList,
  fetchTopics: fetchTopics,
  getAnnotation: getAnnotation,
  deleteAnnotation: deleteAnnotation,
  postAnnotation: postAnnotation,
  getBookmarks: getBookmarks,
  getBookmark: getBookmark,
  queryBookmarks: queryBookmarks
};
