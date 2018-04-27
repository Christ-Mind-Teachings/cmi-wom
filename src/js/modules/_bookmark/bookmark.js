import notify from "toastr";
import net  from "./bmnet";
import differenceWith from "lodash/differenceWith";
import cloneDeep from "lodash/cloneDeep";
import { 
  markSelection, 
  getSelection, 
  deleteNewSelection, 
  deleteSelection, 
  initialize as selectInit
} from "./selection";

function getPageBookmarks() {
  //identify paragraphs with bookmarks
  net.getBookmarks()
    .then((response) => {
      if (response) {
        //mark each paragraph containing bookmarks
        for (let id in response) {
          let pid = id - 1;
          //$(`#p${pid} > i.bkmark.bookmark`).removeClass("outline");
          $(`#p${pid} > span.pnum`).addClass("has-bookmark");

          for (const bm of response[id]) {
            if (bm.selectedText) {
              markSelection(bm.selectedText);
            }
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
      notify.error("Unable to load bookmarks");
    });
}

/*
  Clean up form values and prepare to send to API  
*/
function createAnnotaion(formValues) {

  let annotation = cloneDeep(formValues);

  annotation.rangeStart = annotation.rangeStart.trim();
  annotation.rangeEnd = annotation.rangeEnd.trim();

  if (!annotation.rangeEnd.startsWith("p")) {
    annotation.rangeEnd = `p${annotation.rangeEnd}`;
  }

  //delete empty fields
  if (annotation.Comment === "") {
    delete annotation.Comment;
  }

  if (annotation.creationDate === "") {
    delete annotation.creationDate;
  }

  if (annotation.aid === "") {
    delete annotation.aid;
  }
  else {
    annotation.selectedText = getSelection(annotation.aid);

    if (annotation.creationDate) {
      annotation.selectedText.aid = annotation.creationDate.toString(10);
    }
    delete annotation.selectedText.wrap;
    delete annotation.textId;
  }

  if (annotation.topicList.length === 0) {
    delete annotation.topicList;
  }

  delete annotation.newTopics;
  delete annotation.hasAnnotation;

  console.log("posting annotation: %o", annotation);

  //persist the bookmark
  net.postAnnotation(annotation);
}

/*
  new topics entered on the annotation form are formatted
  to keep only alpha chars and comma. Commas are used to delimit
  topics.

  Topics are converted from string to array and first character is
  uppercased.
*/
function formatNewTopics({newTopics}) {
  //only allow alpha chars and comma's
  let topics = newTopics.replace(/[^a-zA-Z,]/g, "");

  if (!topics || topics === "" ) {
    return [];
  }

  //remove leading and trailing comma's
  topics = topics.replace(/^,*/, "");
  topics = topics.replace(/,*$/, "");

  let newTopicArray = topics.split(",");

  //uppercase first char of each topic
  newTopicArray = newTopicArray.map(s => s.charAt(0).toUpperCase() + s.slice(1));

  return newTopicArray;
}

/*
  Add new topics entered by user on annotation form to topic list
  and store locally and on the server
  - then create and submit new annotation
*/
function addToTopicList(newTopics, formValues) {
  //Check for new topics already in topic list
  net.fetchTopics()
    .then((response) => {
      //remove duplicate topics from and return the rest in difference[]
      let newUniqueTopics = differenceWith(newTopics, response.topics, (n,t) => {
        if (typeof t === "object") {
          return t.value === n;
        }
        return t === n;
      });

      //these are the new topics
      if (newUniqueTopics.length > 0) {
        //add new topics to topic list
        net.addToTopicList(newUniqueTopics);

        //add new topics to this annotations topicList
        formValues.topicList = formValues.topicList.concat(newUniqueTopics);

        //add newTopics to formValues for posting to server
        formValues.newTopics = newUniqueTopics;

        //post the bookmark
        createAnnotaion(formValues);
      }
    })
    .catch(() => {
      throw new Error("error in removing duplicate topics");
    });
} 

/*
  initialize transcript page
*/
function initTranscriptPage() {

  //get existing bookmarks for page
  getPageBookmarks();

  //add support for text selection
  selectInit();

  //setup bookmark navigator if requested
  // let pid = showBookmark();
  // if (pid) {
  //   initNavigator(pid);
  // }
}

export const annotation = {
  /*
    This is called when user submits data from annotation form.
    args:
      formData: annotation form data
  */
  submit(formData) {
    let newTopics = formatNewTopics(formData);

    //add new topics to topic list and create annotation
    if (newTopics.length > 0) {
      addToTopicList(newTopics, formData);
    }
    else {
      //post the bookmark
      createAnnotaion(formData);
    }
  },

  //user pressed cancel on annotation form
  cancel(formData) {
    //no creationDate means a new annotation that hasn't been stored
    if (!formData.creationDate) {
      deleteNewSelection(formData.aid);
    }
  },

  //delete annotation
  delete(formData) {
    //mark as having no annotations if all have been deleted
    let remainingAnnotations = net.deleteAnnotation(formData.rangeStart, formData.creationDate);
    deleteSelection(formData.aid);

    if (remainingAnnotations === 0) {
      $(`#${formData.rangeStart} > span.pnum`).removeClass("has-bookmark");
    } 
  }

};

/*
  if we're on a transcript page
  - add bookmark icons to each paragraph
  - create bookmark toggle listener
*/
export default {
  initialize: function() {
    if ($(".transcript").length) {
      //this is a transcript page
      initTranscriptPage();
    }

    //initialize bookmark list modal - available on all pages
    //list.initialize();
  }
};
