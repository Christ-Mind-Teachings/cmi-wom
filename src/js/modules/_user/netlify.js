/*eslint no-console: "off" */

import user from "netlify-identity-widget";
let userInfo;

export default {

  initialize: function() {
    console.log("Init user authentication");

    /*
     * if user already logged in, change icon to log out
     */
    user.on("init", user => {
      userInfo = user;
      if (userInfo) {
        console.log("netlify init: user %s logged in", userInfo.user_metadata.full_name);
        $(".login-menu-option > span")
          .html("<i class='sign out icon'></i>")
          .addClass("colorGreen")
          .attr("data-tooltip", "Sign Out");
      }
    });

    user.on("login", login => {
      console.log("netlify login: ", login);

      userInfo = login;
      $(".login-menu-option > span")
        .html("<i class='sign out icon'></i>")
        .addClass("colorGreen")
        .attr("data-tooltip", "Sign Out");
    });

    user.on("logout", () => {
      $(".login-menu-option > span")
        .html("<i class='sign in icon'></i>")
        .removeClass("colorGreen")
        .attr("data-tooltip", "Sign In");
      console.log("logout: %s", userInfo.user_metadata.full_name );
      userInfo = null;
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
  },

  getUserInfo: function() {
    if (userInfo) {
      return {
        email: userInfo.email,
        name: userInfo.user_metadata.full_name,
        roles: userInfo.app_metadata.roles,
        avatar_url: userInfo.user_metadata.avatar_url
      };
    }

    return null;
  }
};

