import axios from "axios";
import store from "store";
import scroll from "scroll-into-view";

const uiTocModal = ".toc.ui.modal";
const uiOpenTocModal = ".toc-modal-open";
const uiModalOpacity = 0.5;
const contentsUrl = "/public/contents";

function renderQuestions(questions) {
  return `
    <div class="list">
      ${questions.map(q => `<a class="item" href="${q.url}">${q.title}</a>`).join("")}
    </div>
  `;
}

//generate html for Contents
function makeContents(contents) {
  return (`
    <div class="ui ordered relaxed list">
      ${contents.map(unit => `
        <div class="item"> 
          <a href="${unit.url}">${unit.title}</a>
          ${unit.questions ? renderQuestions(unit.questions) : ""}
        </div>
      `).join("")}
    </div>
  `);
}

export default {

  initialize: function() {
    $(uiTocModal).modal({
      dimmerSettings: {opacity: uiModalOpacity},
      observeChanges: true
    });

    $(uiOpenTocModal).on("click", (e) => {
      e.preventDefault();
      let book = $(e.currentTarget).attr("data-book").toLowerCase();
      let contents = store.get(`contents-${book}`);

      if (contents) {
        $(".toc-image").attr("src", `${contents.image}`);
        $(".toc-title").html(`Table of Contents: <em>${contents.title}</em>`);
        $(".toc-list").html(makeContents(contents.contents));
        $(uiTocModal).modal("show");
      }
      else {
        let url = `${contentsUrl}/${book}.json`;
        axios.get(url)
          .then((response) => {
            $(".toc-image").attr("src", `${response.data.image}`);
            $(".toc-title").html(`Table of Contents: <em>${response.data.title}</em>`);
            $(".toc-list").html(makeContents(response.data.contents));
            store.set(`contents-${book}`, response.data);
            $(uiTocModal).modal("show");
          })
          .catch((error) => {
            $(".toc-image").attr("src", "/public/img/cmi/toc_modal.png");
            $(".toc-title").html("Table of Contents: <em>Error</em>");
            $(".toc-list").html(`<p>Error: ${error.message}</p>`);
            $(uiTocModal).modal("show");
          });
      }

      //if we're on a transcript page indicate the current transcript in
      // the list
      if ($(".transcript").length > 0) {
        let page = location.pathname;
        let $el = $(`.toc-list a[href='${page}']`);

        $el.addClass("current-unit").removeAttr("href");
        scroll($el.get(0));
      }
    });

  }
};