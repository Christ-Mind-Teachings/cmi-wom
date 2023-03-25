/* eslint no-console: off */
import {SourceStore, storeInit} from "www/modules/_util/store";
import search from "www/modules/_search/search";

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

//import search from "./modules/_search/search";

import {womSearchInit} from "./modules/_search/womSearch";
import toc, {getBookId} from "./modules/_contents/toc";
import audio from "./modules/_audio/audio";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  // read only, don't load bookmarks or account
  let ro = isReadOnly();
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
    search.initialize(womSearchInit(store));
    //search.initialize();
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
