/*
  facebook sdk support
*/
export default {
  initialize: () => {
    $.ajax({
      url: "//connect.facebook.net/en_US/sdk.js",
      dataType: "script",
      cache: true,
      success: function() {
        console.log("fb init");
        FB.init({
          appId      : "448658485318107",
          xfbml      : true,
          version    : "v3.0"
        });
      }
    });
  }
};
