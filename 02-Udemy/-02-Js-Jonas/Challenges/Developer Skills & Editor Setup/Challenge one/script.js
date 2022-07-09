const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];

console.log(`... ${dataOne[0]}ºC ... ${dataOne[1]}ºC ... ${dataOne[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(dataOne);
