
//media elements plugin and css
import "mediaelement";
import "mediaelement/build/mediaelementplayer.css";

//media elements plugins ------
import "me-plugin/jump-forward/jump-forward.css";
import "me-plugin/jump-forward/jump-forward";

import "me-plugin/skip-back/skip-back.css";
import "me-plugin/skip-back/skip-back";

import "me-plugin/nextp/nextp.css";
import "me-plugin/nextp/nextp";

import "me-plugin/prevp/prevp.css";
import "me-plugin/prevp/prevp";

import "me-plugin/ptoggle/ptoggle.css";
import "me-plugin/ptoggle/ptoggle";

import "me-plugin/capture/capture.css";
import "me-plugin/capture/capture";
//-----------------------------

import focus, {setPlayer, togglePlayFromHere} from "./focus";

function setEventListeners(haveTimingData) {
  let playerId = $("#cmi-audio-player").closest(".mejs__container").attr("id");
  let player = mejs.players[playerId];

  //send player instance to focus
  setPlayer(player);

  player.media.addEventListener("timeupdate", function() {
    var time = player.getCurrentTime();

    if (haveTimingData) {
      focus.setCurrentPlaybackTime(time);
    }
    else {
      //timeCapture.setCurrentPlaybackTime(time);
    }
  });

  /*
    * one time notification to 'focus' that
    * play has started.
  */
  player.media.addEventListener("playing", function() {
    //timeCapture.play();
    focus.play();
  });

  /*
    * Notify focus or timeCapture audio playback has ended
    */
  player.media.addEventListener("ended", function() {
    if (haveTimingData) {
      focus.ended();
    }
    else {
      //timeCapture.ended();
    }
  });

  player.media.addEventListener("pause", function() {
    focus.pause();
    //timeCapture.pause();
  });

  if (haveTimingData) {

    //this is the play-from-here icon toggle, .ptoggle-hidden sets the background-color
    //of the control to the initial hidden state
    $(".mejs__ptoggle").addClass("mejs-ptoggle-hidden");

    player.media.addEventListener("ptoggle", function() {
      if (togglePlayFromHere()) {
        $(".mejs__ptoggle").addClass("mejs-ptoggle-visible").removeClass("mejs-ptoggle-hidden");
      }      
      else {
        $(".mejs__ptoggle").addClass("mejs-ptoggle-hidden").removeClass("mejs-ptoggle-visible");
      }
    });

    //get notified when seek start
    player.media.addEventListener("seeking", function() {
      var time = player.getCurrentTime();
      focus.setSeeking(time);
    });

    //get notified when seek ended
    player.media.addEventListener("seeked", function() {
      var time = player.getCurrentTime();
      focus.setSeeked(time);
    });

    player.media.addEventListener("prevp", function() {
      let newTime = focus.getTime("PREV");
      console.log("time for previous paragraph is: %s", newTime);
      if (newTime > -1) {
        player.setCurrentTime(newTime);
      }
    });

    player.media.addEventListener("nextp", function() {
      let newTime = focus.getTime("NEXT");
      console.log("time for next paragraph is: %s", newTime);
      if (newTime > -1) {
        player.setCurrentTime(newTime);
      }
    });
  }
  else {
    //set listeners when no timing data present

    //timeCapture.initialize(player);

    //Audio player control that shows/hides time capture icon
    player.media.addEventListener("capture", function() {
      //timeCapture.toggleMarkers();
    });

  }

}

export default {

  /*
   * initialize audio player:
   *
   * args:
   *  src: url of audio file
   *  timingData: uri of timing data, pass it to focus.js
   */
  initialize: function(src, timingData) {
    let features = [];

    //add source of audio file to player
    $("audio.mejs-player").attr("src", src);

    //player controls when we have timing data
    if (timingData) {
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
      error: function(error) {
        console.error("Failed to initialize audio player: ", error);
      },
      success: function(mediaElement) {
        //console.log("mediaelement initialized!");
        if (timingData) {
          focus.initialize(timingData);
        }
      }
    });

    setEventListeners(timingData !== null);
  }

};

