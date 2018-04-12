import scroll from "scroll-into-view";

// get query string from window.location unless the arg 'qString' is not
// null, in that case it represents the query string
function getQueryString(key, qString) {
  let queryString;

  if (qString) {
    queryString = qString.substring(1);
  }
  else {
    queryString = window.location.search.substring(1);
  }
  let vars = queryString.split("&");

  for(let i=0; i<vars.length; i++) {
    let getValue = vars[i].split("=");
    if (getValue[0] === key) {
      return getValue[1];
    }
  }
  return null;
}

/*
  Check for url query string requesting to scroll given paragraph into view
  Syntax: ?v=pid, example: ?v=p20

  Scroll paragraph 20 into view on page load
*/
export function showParagraph() {
  let pId = getQueryString("v");
  if (pId) {
    scroll(document.getElementById(pId), {align: {top: 0.2}});
  }
}

export function bookmarkNavigatorRequested() {
  let bmn = getQueryString("bmn");
  let pid = getQueryString("v");

  if (bmn === "1") {
    return pid;
  }
  return null;
}
