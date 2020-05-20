window.addEventListener("load", start);

function start() {
  var r = document.querySelector("#redRange").value;
  var g = document.querySelector("#greenRange").value;
  var b = document.querySelector("#blueRange").value;

  var boxR = document.querySelector("#valueR");
  var boxG = document.querySelector("#valueG");
  var boxB = document.querySelector("#valueB");

  boxR.value = r;
  boxG.value = g;
  boxB.value = b;

  var colorExample = document.querySelector("#colorExample");
  colorExample.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}
