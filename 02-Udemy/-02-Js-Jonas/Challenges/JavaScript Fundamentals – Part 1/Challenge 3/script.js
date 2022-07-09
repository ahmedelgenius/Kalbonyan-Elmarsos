let dolphins = (97 + 112 + 80) / 3;
let koalas = (109 + 95 + 50) / 3;
console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100) {
  console.log("dolphins win the trophy ");
} else if (koalas > dolphins && koalas >= 100) {
  console.log("koalas win the trophy ");
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy ");
}

// let dolphins = ( 89 + 96 + 108 ) ;
// let koalas = ( 91 + 110 + 88) ;
// console.log(dolphins, koalas);

// if (dolphins > koalas) {
//   console.log("dolphins win the trophy ");
// } else if (koalas > dolphins) {
//   console.log("koalas win the trophy ");
// } else if (dolphins === koalas) {
//   console.log("Both win the trophy!");
// }
