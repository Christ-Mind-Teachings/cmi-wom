/*eslint no-console: "off" */

import user from "netlify-identity-widget";
import md5 from "md5";
let userInfo;

let testUsers = {
  "rick": { 
    email: "rmercer33@gmail.com",
    userId: md5("rmercer33@gmail.com"),
    name: "Rick Mercer",
    roles: ["timer", "editor"]
  },
  "julie": { 
    email: "julief8@me.com",
    userId: md5("julief8@me.com"),
    name: "Julie Franklin",
    roles: ["timer", "editor"]
  },
  "yodi": { 
    email: "yodi@yodith.com",
    userId: md5("yodi@yodith.com"),
    name: "Yodi Debebe",
    roles: ["timer"]
  },
  "hettie": { 
    email: "hcmercer@gmail.com",
    userId: md5("hcmercer@gmail.com"),
    name: "Hettie Mercer",
    roles: []
  }
};

function devUserInfo(name) {
  //console.log("devUserInfo()");
  name = "rick";
  if (testUsers[name]) {
    return testUsers[name];
  }

  return null;
}

function prodUserInfo() {
  //console.log("prodUserInfo()");
  if (userInfo) {
    return {
      email: userInfo.email,
      userId: md5(userInfo.email),
      name: userInfo.user_metadata.full_name,
      roles: userInfo.app_metadata.roles,
      avatar_url: userInfo.user_metadata.avatar_url
    };
  }

  return null;
}

export function getUserInfo(name) {
  if (location.hostname === "wom.christmind.info") {
    return prodUserInfo();
  }
  else {
    return devUserInfo(name);
  }
}

/*
  Modify menubar icons "bookmark" and "sign in" to 
  indicate user is signed in
*/
function setAsSignedIn() {
  //change sign-in icon to sign-out and change color from red to green
  $(".login-menu-option > span")
    .html("<i class='green sign out icon'></i>")
    .attr("data-tooltip", "Sign Out");

  //change bookmark menu icon to green from red
  $(".main.menu a > span > i.bookmark.icon")
    .addClass("green")
    .removeClass("red");
}

/*
  Modify menubar icons "bookmark" and "sign in" to 
  indicate user is signed in
*/
function setAsSignedOut() {
  //change sign-in icon to sign-out and change color from red to green
  $(".login-menu-option > span")
    .html("<i class='red sign in icon'></i>")
    .attr("data-tooltip", "Sign In");

  //change bookmark menu icon to green from red
  $(".main.menu a > span > i.bookmark.icon")
    .addClass("red")
    .removeClass("green");
}

export default {

  initialize: function() {
    //console.log("Init user authentication");

    /*
     * if user already logged in, change icon to log out
     */
    user.on("init", user => {
      userInfo = user;
      if (userInfo) {
        console.log("user %s", userInfo.user_metadata.full_name);
        setAsSignedIn();
      }
    });

    user.on("login", login => {
      userInfo = login;
      setAsSignedIn();

      //reload page on sign in
      location.reload();
    });

    user.on("logout", () => {
      setAsSignedOut();
      //console.log("logout: %s", userInfo.user_metadata.full_name );
      userInfo = null;

      //reload page on sign out
      location.reload();
    });

    //user.on("error", () => console.error("Logged out"));
    //user.on('open', () => console.log("Widget opened"));
    //user.on('close', () => console.log("Widget closed"));

    $(".login-menu-option").on("click", (e) => {
      e.preventDefault();

      if (userInfo) {
        user.logout();
      }
      else {
        user.open();
      }
    });

    //init authentication
    user.init({
      //container: "#netlify-modal"
    });
  }
};

