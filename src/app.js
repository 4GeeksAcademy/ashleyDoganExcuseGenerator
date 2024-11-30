/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["My boss ", "Steve Harvey ", "My uncle ", "The postman "];
  let action = ["burned ", "stole ", "sold ", "ate "];
  let what = ["my homework ", "my phone ", "the car ", "the presents"];
  let when = [
    "the night before Christmas",
    "before they went to jail",
    "while I was at work",
    "when I was on vacation"
  ];

  let rdmWho = Math.floor(Math.random() * who.length);
  let rdmAction = Math.floor(Math.random() * action.length);
  let rdmWhat = Math.floor(Math.random() * what.length);
  let rdmWhen = Math.floor(Math.random() * when.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    who[rdmWho] + action[rdmAction] + what[rdmWhat] + when[rdmWhen];

  console.log("Hello Rigo from the console!");
};
