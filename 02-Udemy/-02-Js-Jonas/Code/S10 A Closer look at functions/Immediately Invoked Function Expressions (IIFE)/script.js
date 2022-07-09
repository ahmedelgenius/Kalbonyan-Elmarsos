const runOnce = function () {
  console.log(" never run again");
};
runOnce();

// iife
(function () {
  console.log("never run again");
  const isPrivate = 23;
})();

(() => console.log("never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPriva);
