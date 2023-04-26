/* eslint no-console: off */

import {SourceStore, storeInit} from "common/modules/_util/store";
import search from "common/modules/_search/search";
import {showParagraph} from "common/modules/_util/url";
import audio from "common/modules/_audio/audio";
import {initTranscriptPage} from "common/modules/_page/startup";
import {initialize as initNotes} from "common/modules/_page/notes";
import {initialize as initVideo} from "common/modules/_video/acq";

//teaching specific modules
import {setEnv, loadConfig} from "./modules/_config/config";
import toc, {getBookId} from "./modules/_contents/toc";
import { noteInfo } from "./notes";
import constants from "./constants";

$(document).ready(() => {
  const store = new SourceStore(constants);
  storeInit(constants);

  setEnv(store);
  initNotes(noteInfo);
  initVideo();

  loadConfig(getBookId()).then(() => {
    initTranscriptPage(store);
    search.initialize(store);

    audio.initialize(store);
    toc.initialize("transcript");
    showParagraph();

  }).catch((error) => {
    console.error(error);
  });
});
