const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("age must a psotive number");
//       }
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Password cannot contain password");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "ahmed",
//   age: 20,
//   email: "ahmed@gmail.com",
//   password: "ahmed123",
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error)=>{
//     console.log(error);
// })

// const Task = mongoose.model("Task", {
//   description: {
//    type:String,
// required:true,
// trim:true
//   },
// completed:{
//     type:Boolean,
// default:false
// }
// });

// const task = new Task({
//  description:'learn the mongoose',
// completed:false
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error)=>{
//     console.log(error);
// })
