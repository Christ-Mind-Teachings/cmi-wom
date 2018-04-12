
/*
  User clicked a bookmark link in the bookmark list modal and had "following" option 
  enabled.

  Initialize the bookmark navigator so they can follow the list of bookmarks
*/
export function initNavigator(pid) {
  //show the navigator
  $(".bookmark-navigator-wrapper").removeClass("hide-bookmark-navigator");
  console.log("initNavigator: pid: %s", pid);
}
