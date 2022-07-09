const hasDriversLicense = true; // one
const hasGoodVision = true; // two

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // three
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive");
}

// if (hasDriversLicense && hasGoodVision) {
//   console.log('sarah is able to drive');
// } else {
//   console.log('someone else should drive');
// }
