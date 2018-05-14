/*
  facebook sdk support
*/

function updateStatusCallback() {
  console.log("updateStatusCallback");
}

export default {
  initialize: () => {
    console.log("initialize fb");
    $.ajax(
      {
        url: "//connect.facebook.net/en_US/sdk.js",
        dataType: "script",
        cache: true,
        success: function()
        {
          FB.init(
            {
              appId      : "448658485318107",
              xfbml      : true,
              version    : "v3.0"
            }
          );
              
          $("#loginbutton,#feedbutton").removeAttr("disabled");
          FB.getLoginStatus(updateStatusCallback);
        }
      });
  }
};
