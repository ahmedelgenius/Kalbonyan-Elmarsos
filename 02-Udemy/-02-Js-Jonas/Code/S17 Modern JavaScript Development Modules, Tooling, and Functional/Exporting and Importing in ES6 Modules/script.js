// Importing module
// import { addToCart, totalPrice as price, tt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tt);

console.log("importing module");
// console.log(shippingCost);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tt } from './shoppingCart.js';
// console.log(price);
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 7);
add("apples", 3);
console.log(cart);
