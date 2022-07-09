document.addEventListener("DOMContentLoaded", function (e) {
  console.log("html parsed and dom tree built", e);
});

window.addEventListener("load", function (e) {
  console.log("page fully loaded", e);
});

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
