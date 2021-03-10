"use strict";

var color = document.querySelector("#color");
var exit = document.querySelector("#exit");
color.addEventListener("input", function () {
  var value = color.value;
  exit.innerHTML = value;
  exit.style.background = value;
  exit.style.color = "#ffffff";
});