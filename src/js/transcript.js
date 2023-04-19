/* eslint no-console: off */

import {SourceStore, storeInit} from "common/modules/_util/store";
import search from "common/modules/_search/search";
import {isReadOnly, setBackgroundColor, showParagraph} from "common/modules/_util/url";
import auth from "common/modules/_user/netlify";
import audio from "common/modules/_audio/audio";
import fb from "common/modules/_util/facebook";
import {initTranscriptPage} from "common/modules/_page/startup";
import {initialize as initNotes} from "common/modules/_page/notes";
import {initialize as initVideo} from "common/modules/_video/acq";

//teaching specific modules
import {setEnv, loadConfig} from "./modules/_config/config";
import {bookmarkStart} from "./modules/_bookmark/start";
import {searchInit} from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
import about from "./modules/_about/about";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  // read only, don't load bookmarks or account
  let ro = isReadOnly();
  initTranscriptPage("pnDisplay");
  if (ro) {
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

  setEnv(store);
  fb.initialize();
  about.initialize();
  initNotes(noteInfo);
  initVideo();

  loadConfig(getBookId()).then(() => {
    search.initialize(searchInit(store));

    toc.initialize("transcript");
    showParagraph();

    if (!ro) {
      audio.initialize(store);
      bookmarkStart("transcript", store);
    }

  }).catch((error) => {
    console.error(error);
  });
});
