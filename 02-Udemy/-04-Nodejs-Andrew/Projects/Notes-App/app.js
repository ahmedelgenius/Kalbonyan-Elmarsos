//Importing Node.js Core Modules
// const fs = require("fs");

// // fs.writeFileSync('notes.txt', 'My name is ahmed.')

// fs.appendFileSync("notes.txt", " I live in Egypt.");
// const { default: validator } = require("validator");
// const chalk = require("chalk");
// const getNotes = require("./notes");

// const msg = getNotes();
// const redMsg = chalk.red.inverse.bold("success");
// console.log(redMsg);
// console.log(msg);
// console.log(validator.isEmail("ahmed@gmail.com"));

// console.log(process.argv);
// const yargs = require("yargs");
// const command = process.argv[2];

// if (command === "add") {
//   console.log("adding note");
// } else if (command === "remove") {
//   console.log("removing note");
// }
// const chalk = require('chalk')
// const yargs = require("yargs");
const notes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
