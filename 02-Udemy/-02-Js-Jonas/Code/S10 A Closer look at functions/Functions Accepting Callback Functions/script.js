const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // return  name function
};

transformer("javaScript is the best", upperFirstWord);
transformer("javaScript is the best", oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log("*");
};
document.body.addEventListener("click", high5);
["ahmed", "yousef", "mo"].forEach(high5);
