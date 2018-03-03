/*eslint no-console: "off" */

import user from "netlify-identity-widget";
let userInfo;

export default {

  initialize: function() {
    console.log("Init user authentication");

    /*
     * if user already logged in, change sidebar menu option
     * to log out
     */
    user.on("init", user => {

      userInfo = user;
      if (userInfo) {
        console.log("netlify init: user %s logged in", userInfo.user_metadata.full_name);
      }
    });

    user.on("login", login => {
      console.log("netlify login: ", login);

      userInfo = login;
      $(".login-menu-option").html("<i class='sign out icon'></i>Sign Out");
      $(".cmi-menu-toggle-button").addClass("green basic");
    });

    user.on("logout", () => {
      console.log("logout: %s", userInfo.user_metadata.full_name );
      userInfo = null;

      //redirect to home page
      location.href = "/";
    });

    user.on("error", () => console.error("Logged out"));
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
  },

  getUserInfo: function() {
    if (userInfo) {
      return {
        email: userInfo.email,
        name: userInfo.user_metadata.full_name,
        avatar_url: userInfo.user_metadata.avatar_url
      };
    }

    return null;
  }
};

