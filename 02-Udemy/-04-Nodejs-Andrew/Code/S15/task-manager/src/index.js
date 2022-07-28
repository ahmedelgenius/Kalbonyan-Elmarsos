const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// const multer = require("multer");
// const Task = require("./models/task");
// const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("plz upload a word document"));
//     }

//     cb(undefined, true);
//   },
// });
// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

// app.get("/tasks", (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((error) => {
//       res.status(500).send();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   const _id = req.params.id;
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }
//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("", (req, res) => {
//   const task = new Task(req.body);
//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/tasks/:id", (req, res) => {
//   const _id = req.params.id;
//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }
//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
// app.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "email", "password", "age"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
// app.patch("/tasks/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.post("/tasks", async (req, res) => {
//   const task = new Task(req.body);

//   try {
//     await task.save();
//     res.status(201).send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.get("/tasks/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findById(_id);

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// app.delete("/tasks/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);

//     if (!task) {
//       res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// const Task = require("./models/task");
// const userModel = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById('')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

//   const user = await userModel.findById("");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()
