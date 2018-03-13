/*
  highlight and scroll paragraph being spoken during audio playback

  Supports:
    play-from-here
*/

import scroll from "scroll-into-view";
import {fetchTimingData} from "../config";

import _find from "lodash/find";
import _findLastIndex from "lodash/findLastIndex";
import _map from "lodash/map";

//paragraph timing array assigned on module initialization
let timingData;

let ptr = -1;
let prevPtr = -1;
let seeking = false;
let ended = false;
let player;

/*
 * init playFromHere
 */
function initializePlayFromHere() {
  //initially hide playmark icon added next
  $(".transcript.ui.text.container").addClass("playmark-hide");

  // add 'play' markers to each paragraph
  $("p.cmiTranPara").each(function() {
    $(this).prepend("<i class='playmark play icon'></i>");
  });

  //create listener
  $(".transcript.ui.text.container").on("click","p.cmiTranPara > i.playmark.icon", function(e) {
    e.preventDefault();
    let el = $(this);
    let id = el.parent().attr("id");

    //remove the 'p' from id before calling getTime()
    let newTime = getTime(id.substr(1));

    //set new playtime
    if (newTime > -1) {
      player.setCurrentTime(newTime);
    }
  });
}

function removeCurrentHilight() {
  if (prevPtr > -1) {
    $("#" + timingData[prevPtr].id).removeClass("hilight");
  }
}

/*
  Called by mediaelement when the audio player is initialized
*/
export function setPlayer(p) {
  player = p;
}

/*
 * Toggle display of play-from-here controls
 */
export function togglePlayFromHere() {
  let el = $(".transcript.ui.text.container");

  if (el.hasClass("playmark-hide")) {
    el.removeClass("playmark-hide");
    return true;
  }
  else {
    el.addClass("playmark-hide");
    return false;
  }
}

//round audio timing data to two decimal places
function round(time) {
  return Math.round(time * 100) / 100;
}

function getIndex(time) {
  let index = _findLastIndex(timingData, (o) => {
    return o.seconds <= time;
  });

  return index;
}

function getTime(idx) {
  if (idx < 0 || idx >= timingData.length ) {
    return 60 * 60 * 24; //return a big number
  }

  return timingData[idx].seconds;
}

function manageHiLight(current) {

  //initial state of pointer is -1
  if ((ptr === -1) || current > getTime(ptr + 1)) {
    ptr++;
    if (!seeking) {
      showNscroll(ptr);
    }
  }
}

/*
 * User seeked behind the current play position
 * - adjust hilight accordingly
 */
function adjustPlayPosition(index) {
  ptr = index;
  showNscroll(ptr);
}

function showNscroll(idx) {
  var tinfo = timingData[idx];
  //console.log("hilight transition at time %s to paragraph %s", current, tinfo.id);

  //scroll into view
  scroll(document.getElementById(tinfo.id));

  if (prevPtr > -1) {
    $("#" + timingData[prevPtr].id).removeClass("hilight");
  }

  $("#" + tinfo.id).addClass("hilight");
  prevPtr = idx;
}

export default {

  initialize: function(timingDataUri) {
    
    //load the timing data
    fetchTimingData(timingDataUri)
      .then((data) => {
        //console.log("timing data loaded");

        //round timing data to two decimal places
        timingData = _map(data.time, function(value) {
          value.seconds = round(value.seconds);
          return value;
        });
        //console.log("timing data: ", timingData);

        initializePlayFromHere();
      })
      .catch((error) => {
        console.error("Failed to load timing data: %s, error: ", timingDataUri, error);
      });
  },

  /*
    This is called every 250ms from the audio player and used to adjust the
    highlight whenever a new paragraph has started
  */
  setCurrentPlaybackTime: function(time) {
    if (timingData) {
      manageHiLight(round(time));
    }
  },

  /*
    called each time the play button is pressed
  */
  play: function() {

    //if ended is true, the audio is being replayed
    // - set pointers and flags to default values
    if (ended) {
      ptr = -1;
      prevPtr = -1;
      seeking = false;
      ended = false;
      console.log("audio restarting");
    }
    else {
      console.log("audio playing");
    }
  },

  /* 
    called each time the pause button is pressed
  */
  pause: function() {
    console.log("audio paused");
  },

  /*
    When audio has ended we remove highlight from the last paragraph
    and set the ended flag to true. We set the flag so the setSeeked() 
    event, which is called when the audio ends, will exit the function
    without action. If we don't do this, when the audio ends, the transcript
    is scrolled to the top and the first paragraph highlighted.
  */
  ended: function() {
    if (!timingData) {
      return;
    }
    ended = true;
    console.log("play ended");

    //remove hilight
    removeCurrentHilight();
  },

  //seeking started
  setSeeking: function() {
    if (!timingData) {
      return;
    }
    //disable hilight event handling
    seeking = true;
  },

  /*
    Seeking ended, adjust current paragraph and highlighting accordingly
  */
  setSeeked: function(time) {
    if (!timingData) {
      return;
    }

    seeking = false;

    //setSeeked() is called when audio has ended. We don't want to 
    //do anything in that case
    if (ended) {
      return;
    }

    var index = getIndex(round(time));

    //console.log("seeked from %s to %s", ptr, index);
    adjustPlayPosition(index);
  },

  /*
   * Get audio start time for paragraph 'p'.
   *  - arg p: is an id of a paragraph or
   *    NEXT, PREV for next and previous paragraphs relative to current
   *    playback time
   */
  getTime: function(p) {
    let time = -1;
    let info;

    switch(p) {
      case "NEXT":
        if ((ptr + 1) < timingData.length) {
          time = getTime(ptr + 1);
        }
        break;
      case "PREV":
        if ((ptr - 1) >= 0) {
          time = getTime(ptr - 1);
        }
        break;
      default:
        info = _find(timingData, function(item) {
          return item.id === p;
        });

        if (info) {
          time = info.seconds;
        }
        break;
    }

    return time;
  }

};

