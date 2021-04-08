/* eslint no-console: off */
import {storeInit} from "www/modules/_util/store";

//common modules
// import {showParagraph} from "www/modules/_util/url";
import auth from "www/modules/_user/netlify";
// import fb from "www/modules/_util/facebook";
import {initTranscriptPage} from "www/modules/_page/startup";
// import {initialize as initNotes} from "www/modules/_page/notes";
import {setLanguage} from "www/modules/_language/lang";
// import {initialize as initVideo} from "www/modules/_video/acq";

//why

//teaching specific modules
import {loadConfig} from "./modules/_config/config";
// import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
// import audio from "./modules/_audio/audio";
import about from "./modules/_about/about";
// import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  storeInit(constants);
  setLanguage(constants);
  initTranscriptPage("pnDisplay");
  auth.initialize();
  // fb.initialize();
  about.initialize();
  // initNotes(noteInfo);
  // initVideo();

  loadConfig(getBookId()).then(() => {
    search.initialize();
    toc.initialize("transcript");
    // audio.initialize();
    // showParagraph();
    // bookmarkStart("transcript");
  }).catch((error) => {
    console.error(error);
  });
});
