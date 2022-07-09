// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
// PersonClass
class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const ahmed = new Person("ahmed");

console.log("ahmed" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
// polifilling async functions
import "regenerator-runtime/runtime";
