(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    // when i do click on the body header color = blue
    header.style.color = "blue";
  });
})();
