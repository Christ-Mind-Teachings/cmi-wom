/*
  search results query navigator
*/

import scroll from "scroll-into-view";
import store from "store";
import notify from "toastr";
const page = require("../_config/key");

const queryResultName = "query-result-wom";

class PageMatches {
  constructor(query, start, end, hits) {
    this.query = query;
    this.start = start;
    this.end = end;
    this.count = end - start + 1;
    this.hits = hits;
  }

  setStart(current) {
    this.current = current;
    let pid = this.hits[current].location;

    scroll(document.getElementById(pid), {align: {top: 0.2}});
    this.setTitle();
  }

  setTitle() {
    let pos = this.current - this.start + 1;
    let title = `Search for <em>${this.query}</em> (${pos} of ${this.count})`;

    $(".search-navigator-header-query").html(title);
  }

  /*
    Move to previous match or last match if we're on the first one
  */
  setPrevious() {
    //no where to go if there's only one match on the page
    if (this.start === this.end) {
      return;
    }
    let pos = this.current - 1;

    if (pos < this.start) {
      pos = this.end;
    }

    this.setStart(pos);
  }

  /*
    Move to next match position or the first if we're on the last
  */
  setNext() {
    //no where to go if there's only one match on the page
    if (this.start === this.end) {
      return;
    }
    let pos = this.current + 1;

    if (pos > this.end) {
      pos = this.start;
    }

    this.setStart(pos);
  }

  showCurrent() {
    let pid = this.hits[this.current].location;
    scroll(document.getElementById(pid), {align: {top: 0.2}});
  }
}

//hilight terms on page for current search
function markSearchHits(searchHits, start, end, query, state) {
  let markFailure = 0;

  //Note: this regex wont find a string within a string - only finds
  //matches that begin on a word boundary
  //var regex = new RegExp("(?:^|\\b)(" + searchData.query + ")(?:$|\\b)", "gim");
  let regex = new RegExp("(?:^|\\b)(" + query + ")(?:$|\\b|)", "gim");
  for (let i = start; i <= end; i++) {
    let id = searchHits[i].location;
    let el = document.getElementById(id);

    // a data error is indicated by el == null
    if (!el) {
      markFailure++;
      continue;
    }
    let content = el.innerHTML;

    //remove newline chars in content - they can prevent the
    //query string from being highlighted
    content = content.replace(/[\r\n]/gm," ");
    if (state === "show") {
      el.innerHTML = content.replace(regex, "<mark class='show-mark'>$1</mark>");
    }
    else {
      el.innerHTML = content.replace(regex, "<mark class='hide-mark'>$1</mark>");
    }

    //test if query was highlighted
    if (el.innerHTML === content) {
      console.log("Regex did not match: \"%s\" for %s", query, id);
      markFailure++;
    }
  }

  return markFailure;
}


/*
  Set up listeners for search navigator links
  args: matches - keeps track of page specific search hits
*/
function initClickListeners(matches) {

  //previous search
  $(".search-navigator .previous-match").on("click", function(e) {
    e.preventDefault();
    matches.setPrevious();
  });

  $(".search-navigator .next-match").on("click", function(e) {
    e.preventDefault();
    matches.setNext();
  });

  $(".search-navigator .current-match").on("click", function(e) {
    e.preventDefault();
    matches.showCurrent();
  });

  $(".search-navigator .close-window").on("click", function(e) {
    e.preventDefault();

    $(".search-navigator-wrapper").addClass("hide-search-navigator");
    $(".transcript").removeClass("search-navigator-active");
  });
}

/*
  first and last positions for this pages search hits and
  the next and previous pages.
*/
function findPositions(pid, pageKey, flat) {
  let positions = {
    current: -1,
    prev: -1,
    start: -1,
    end: -1,
    next: -1
  };

  let found = false;

  for (let i = 0; i < flat.length; i++) {
    if (flat[i].key === pageKey) {
      if (flat[i].location === pid) {
        positions.current = i;
      }
      if (!found) {
        positions.start = i;
        positions.end = i;
        found = true;

        if (i > 0) {
          positions.prev = i - 1;
        }
      }
    }
    else if (found) {
      positions.end = i - 1;
      positions.next = i;
      break;
    }
  }

  //console.log("positions: %o", positions);
  return positions;
}

function initControls(pid) {
  let lastSearch = store.get(queryResultName);

  if (!lastSearch) {
    notify.error("Show search result requested but can't find search results.");
    return;
  }

  //console.log("lastSearch: %o", lastSearch);

  let pageKey = page.genPageKey();
  let pageKeyString = pageKey.toString(10);
  let bid = page.decodeKey(pageKey).bookId;
  let title = lastSearch.titleArray[bid];

  let hitPositions = findPositions(pid, pageKeyString, lastSearch.flat);
  let url;

  if (hitPositions.prev > -1) {
    url = `${lastSearch.flat[hitPositions.prev].url}?srch=${lastSearch.flat[hitPositions.prev].location}`;
    $(".search-navigator .previous-page").attr("href", url);
  }
  else {
    $(".search-navigator .previous-page").addClass("inactive");
  }

  if (hitPositions.next > -1) {
    url = `${lastSearch.flat[hitPositions.next].url}?srch=${lastSearch.flat[hitPositions.next].location}`;
    $(".search-navigator .next-page").attr("href", url);
  }
  else {
    $(".search-navigator .next-page").addClass("inactive");
  }

  if (hitPositions.start === hitPositions.end) {
    $(".search-navigator .previous-match").addClass("inactive");
    $(".search-navigator .next-match").addClass("inactive");
  }

  //set search navigator title
  $(".search-navigator-header-book").text(`${title} - ${lastSearch.pageInfo[pageKey].title}`);

  let matches = new PageMatches(lastSearch.query, hitPositions.start, hitPositions.end, lastSearch.flat);
  matches.setStart(hitPositions.current);

  let markFail = markSearchHits(lastSearch.flat, hitPositions.start, hitPositions.end, lastSearch.query, "show");
  if (markFail) {
    notify.info(`Failed to hilight ${markFail} search results`);
  }
  initClickListeners(matches);
}

export function initNavigator(requestedPid) {
  //console.log("init search navigator pid: %s", requestedPid);
  initControls(requestedPid);

  //indicate search navigator is active by adding class to ./transcript
  $(".transcript").addClass("search-navigator-active");
  $(".search-navigator-wrapper").removeClass("hide-search-navigator");
}