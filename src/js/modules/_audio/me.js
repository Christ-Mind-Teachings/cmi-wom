
//media elements plugin and css
require("mediaelement");
require("mediaelement/build/mediaelementplayer.css");

//media elements plugins ------
require("me-plugin/jump-forward/jump-forward.css");
require("me-plugin/jump-forward/jump-forward");

require("me-plugin/skip-back/skip-back.css");
require("me-plugin/skip-back/skip-back");

require("me-plugin/nextp/nextp.css");
require("me-plugin/nextp/nextp");

require("me-plugin/prevp/prevp.css");
require("me-plugin/prevp/prevp");

require("me-plugin/ptoggle/ptoggle.css");
require("me-plugin/ptoggle/ptoggle");

require("me-plugin/capture/capture.css");
require("me-plugin/capture/capture");
//-----------------------------

const focus = require("./focus");
const timeCapture = require("./capture");

let player = {};
let timingData;
let playing = false;

function initPlayFromHereListener() {
  //add play-from-here listener
  //console.log("play from here listener");
  //$("p.cmiTranPara i.playmark").each(function(idx) {
  $(".transcript.ui.text.container").on("click","p.cmiTranPara > i.playmark.icon", function(e) {
    e.preventDefault();
    let el = $(this);
    let id = el.parent().attr("id");
    console.log("play-from-here, clicked p: %s", id);
    /*
    let newTime;
    newTime = focus.getTime(id);
    if (newTime > -1) {
      player.setCurrentTime(newTime);
    }
    */
  });
}

module.exports = {

  /*
   * initialize audio player:
   *
   * args:
   *  src: url of audio file
   *  timing: optional, audio playback time for the start of each paragraph
   *  in the transcript
   */
  initialize: function(src, timing) {
    let features = [];
    timingData = timing;

    if (timing) {
      console.log("audio init: timing data available");
      //console.log("timing data: ", timing);
    }
    else {
      console.log("audio init: no timing data");
    }

    //add source of audio file to player
    $("audio.mejs-player").attr("src", src);

    //player controls when we have timing data
    if (timing) {
      features = ["playpause", "current", "duration", "prevp", "nextp", "ptoggle"];
    }
    else {
      features = ["playpause", "current", "duration", "skipback", "jumpforward", "capture"];
    }

    $("#cmi-audio-player").mediaelementplayer({
      pluginPath: "/public/vendor/mediaelement/plugin/",
      skipBackInterval: 15,
      jumpForwardInterval: 15,
      timeFormat: "h:mm:ss",
      features: features,
      error: function(error, media, node) {
        console.log("Error: ", error);
      },
      success: function(mediaElement, originalNode) {
        console.log("mediaelement initialized!");
        if (timingData) {
          focus.initialize(timingData);
        }
      }
    });

    var playerId = $("#cmi-audio-player").closest(".mejs__container").attr("id");
    player = mejs.players[playerId];

    player.media.addEventListener("timeupdate", function(e) {
      var time = player.getCurrentTime();

      if (timingData) {
        focus.setCurrentPlaybackTime(time);
      }
      else {
        timeCapture.setCurrentPlaybackTime(time);
      }
    });

    /*
     * Notify focus or timeCapture audio playback has ended
     */
    player.media.addEventListener("ended", function(e) {
      if (timingData) {
        focus.ended();
      }
      else {
        timeCapture.ended();
      }
    });

    /*
     * one time notification to 'focus' that
     * play has started.
     */
    player.media.addEventListener("playing", function(e) {
      console.log("event: playing");
      timeCapture.play();
      if (!playing && timingData) {
        focus.play();
        playing = true;
      }
    });

    player.media.addEventListener("pause", function(e) {
      console.log("event: pause");
      timeCapture.pause();
    });

    /*
     * We have timing data - setup to support highlighting and jumping
     * between paragraphs
     */
    if (timingData) {
      //play from here
      initPlayFromHereListener();

      //get notified when seek start
      player.media.addEventListener("seeking", function(e) {
        var time = player.getCurrentTime();
        focus.setSeeking(time);
      });

      //get notified when seek ended
      player.media.addEventListener("seeked", function(e) {
        var time = player.getCurrentTime();
        focus.setSeeked(time);
      });

      player.media.addEventListener("prevp", function(e) {
        let newTime = focus.getTime("PREV");
        console.log("time for previous paragraph is: %s", newTime);
        if (newTime > -1) {
          player.setCurrentTime(newTime);
        }
      });

      player.media.addEventListener("nextp", function(e) {
        let newTime = focus.getTime("NEXT");
        console.log("time for next paragraph is: %s", newTime);
        if (newTime > -1) {
          player.setCurrentTime(newTime);
        }
      });

      player.media.addEventListener("ptoggle", function(e) {
        focus.toggleParaMarkers();
      });

    }
    else {
      //No timing data - enable user time capture

      timeCapture.initialize(player);

      //Audio player control that shows/hides time capture icon
      player.media.addEventListener("capture", function(e) {
        timeCapture.toggleMarkers();
      });
    }
  }
};

