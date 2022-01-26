/* eslint no-console: off */
import {storeInit} from "www/modules/_util/store";

//common modules
import {isReadOnly, setBackgroundColor, showParagraph} from "www/modules/_util/url";
import auth from "www/modules/_user/netlify";
import fb from "www/modules/_util/facebook";
import {initTranscriptPage} from "www/modules/_page/startup";
import {initialize as initNotes} from "www/modules/_page/notes";
import {setLanguage} from "www/modules/_language/lang";
import {initialize as initVideo} from "www/modules/_video/acq";

//teaching specific modules
import {loadConfig} from "./modules/_config/config";
import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
import audio from "./modules/_audio/audio";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  // read only, don't load bookmarks or account
  let ro = isReadOnly();
  storeInit(constants);
  setLanguage(constants);
  initTranscriptPage("pnDisplay");
  if (ro) {
    //console.log("Read only: auth not initialized");

    //hide menu
    $("#cmi-transcript-menu").addClass("hide");

    let bc = setBackgroundColor();
    if (bc) {
      $("body").css("background-color", `#${bc}`);
    }
  }
  else {
    auth.initialize();
  }
  fb.initialize();
  about.initialize();
  initNotes(noteInfo);
  initVideo();

  loadConfig(getBookId()).then(() => {
    search.initialize();
    toc.initialize("transcript");

    if (!ro) {
      audio.initialize();
    }
    showParagraph();

    if (!ro) {
      bookmarkStart("transcript");
    }
  }).catch((error) => {
    console.error(error);
  });
});
