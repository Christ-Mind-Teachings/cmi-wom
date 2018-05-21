import {pageDriver} from "../_util/driver";

function createClickHandlers() {
  $("#help-menu").on("click", "div.item", function(e) {
    e.preventDefault();

    if ($(this).hasClass("page-tour")) {
      console.log("pageDriver");
      pageDriver();
    }
  });
}

export default {
  initialize() {
    createClickHandlers();
  }
};
