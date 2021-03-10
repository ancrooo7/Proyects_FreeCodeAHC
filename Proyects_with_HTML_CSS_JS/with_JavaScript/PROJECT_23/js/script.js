"use strict";

var update = function update() {
  var text = document.querySelector("#text");
  var view = document.querySelector("#view");
  view.srcdoc = text.value;
};