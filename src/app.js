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

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];

  console.log("Hello Rigo from the console!");
};
