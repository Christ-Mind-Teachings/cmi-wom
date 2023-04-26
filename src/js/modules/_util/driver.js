import {runFeatureIntro} from "common/modules/_util/driver";

export function pageDriver() {
  let steps = [
    {
      element: "#source-homepage",
      popover: {
        title: "The Way of Mastery",
        description: "This is the homepage for all of <em>The Way of Mastery</em> teachings in the Library. Each of the volumes below contain chapters and some included questions too. And most contain the original audio so you can read along as you listen.",
        position: "bottom"
      }
    },
    {
      element: "#book-acq",
      popover: {
        title: "Get Acquainted",
        description: "Learn about the Way of Mastery, click on the image to see the table of contents.",
        position: "top"
      }
    },
    {
      //element: "!#news-tab-content",
      element: "!#news-tab",
      popover: {
        title: "News",
        description: "Short announcements",
        position: "left"
      }
    },
    {
      //element: "!#quote-tab-content",
      element: "!#quote-tab",
      popover: {
        title: "Quote",
        description: "Display inspiring quotes and share them via email or Facebook. (Don't press the button now, it will mess things up!! If you do, just press escape.)",
        position: "right",
      }
    },
    {
      element: "#book-woh",
      popover: {
        title: "The Way of the Heart",
        description: "The first of three years of monthly messages that present the fundamental ideas and exercises that form a pathway of awakening.",
        position: "right"
      }
    },
    {
      element: "#book-wot",
      popover: {
        title: "The Way of Transformation",
        description: "The second year of monthly messages that presents a transformative way of life.",
        position: "right"
      }
    },
    {
      element: "#book-wok",
      popover: {
        title: "The Way of Knowing",
        description: "The final year of monthly messages that culminates <em>The Way of Mastery</em>.",
        position: "left"
      }
    },
    {
      element: "#book-tjl",
      popover: {
        title: "The Jeshua Letters",
        description: "Jayem's account of his introduction to Jeshua.",
        position: "right"
      }
    },
    {
      element: "#book-wos",
      popover: {
        title: "The Way of the Servant",
        description: "A poetic description of the journey of awakening taken from inception to recognition of self as the servant - one who walks this world awake.",
        position: "right"
      }
    },
    {
      element: "#book-early",
      popover: {
        title: "The Early Years",
        description: "A collection of messages given before the Way of the Heart.",
        position: "left"
      }
    },
    {
      element: "#book-topics",
      popover: {
        title: "Way of Mastery Topics",
        description: "A grouping of Way of Mastery concepts by topic. Topics include <em>forgiveness</em>, <em>Exercises</em>, and many more. See the Welcome page for more information.",
        position: "right"
      }
    },
    {
      element: "#moavideo",
      popover: {
        title: "The Meaning of Ascension",
        description: "A video of Jayem channeling Jeshua",
        position: "right"
      }
    }
  ];

  runFeatureIntro(steps,{
    allowClose: false,
    opacity: 0.3
  });
}

