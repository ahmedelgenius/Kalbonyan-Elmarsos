// Use ANY data type,return ANY data type,
console.log(3 || "ahmed");
console.log("" || "ahmed");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || " " || "Hello" || 23 || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// and
console.log(0 && "ahmed");
console.log(5 && "ahmed");
console.log("hello" && 5 && null && "ahmed");

// practical exm
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// restaurant.numGuests = 0;

// nullish  > null and undefined ( not 0 or '')
const guestsCorrect = restaurant.numGuests || 10;
console.log(guestsCorrect);
