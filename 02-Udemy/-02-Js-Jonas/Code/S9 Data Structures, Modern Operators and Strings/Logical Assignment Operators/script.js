const rest1 = {
  name: "capr1",
  // numGuests:20,
  numGuests: 0,
};
const rest2 = {
  name: "la piazz",
  owner: "mohamed",
};

// or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||=   10;
// rest2.numGuests ||=  10;

// nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);
// and
rest1.owner &&= "<anonymous>";
rest2.owner &&= "<anonymous>";
