//Importing Node.js Core Modules
// const fs = require("fs");

// // fs.writeFileSync('notes.txt', 'My name is ahmed.')

// fs.appendFileSync("notes.txt", " I live in Egypt.");
// const { default: validator } = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
const redMsg = chalk.red.inverse.bold("success");
console.log(redMsg);
// console.log(msg);
// console.log(validator.isEmail("ahmed@gmail.com"));
