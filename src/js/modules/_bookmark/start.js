/*
  Initialize bookmark modules
*/

import bookmark from "common/modules/_bookmark/bookmark";
import {initShareByEmail} from "common/modules/_bookmark/shareByEmail";
import share from "common/modules/_share/share";

//teaching specific
import constants from "../../constants";
import { getPageInfo } from "../_config/config";

export function bookmarkStart(page, si) {
  let pid;
  if (page === "transcript") {
    share.initialize(si).then((pid) => {
      bookmark.initialize(pid, si);
    });

    //get page info and set as heading under '?' menu option
    let key = si.keyInfo.genPageKey();

    // there is no key for videos, ie: moa
    if (key !== -1) {
      si.getPageInfo(key)
        .then((info) => {
          //console.log("pageInfo: %o", info);
          let title = `${info.source}<br/>${info.bookTitle}`;

          if (info.subTitle) {
            title = `${title}<br/>${info.subTitle}`;
          }

          title = `${title}<br/>${info.title}`;
          $("#transcript-page-info").html(title);
        });
    }
  }
  //init bookmark for non-transcript pages.
  else {
    bookmark.initialize(pid, si);
  }
  initShareByEmail(si);
}

