const ordersSet = new Set(["pasta", "pizza", "risotto", "pasta", "pizza"]);

console.log(ordersSet);

console.log(new Set("ahmed"));
console.log(ordersSet.size);
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("bremd"));
ordersSet.add("garlic");
ordersSet.add("garlic");
ordersSet.delete("risotto");
ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//exp
const staf = ["watier", "chef", "waiter", "chef"];

const staffUnique = [...new Set(staf)];
console.log(staffUnique);

console.log(new Setd("ayhaga").size);
