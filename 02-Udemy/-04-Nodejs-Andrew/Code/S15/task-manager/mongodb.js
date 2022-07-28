// // CRUD create read update delete

// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }

//     const db = client.db(databaseName);
//     // db.collection("users").findOne({ name: "ahmed" }, (error, user) => {});
//     //     db.collection("users").findOne({
//     //       _id: new ObjectID("fa5151351deib846429126g5"),
//     //     },(error,user)=>{

//     //         if (error) {
//     //          return console.log('unble to fect');
//     //         }
//     //         console.log(user);

//     // })
//     // db.collection("tasks")
//     //   .find({ completed: false })
//     //   .toArray((error, tasks) => {
//     //     console.log(tasks);
//     //   });
//     // db.collection('users').deleteMany({
//     //     age: 27
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // db.collection('users').insertMany([
//     //     {
//     //         name:"ahmed",
//     //         age:22,
//     //     },
//     //     {
//     //         name:"jo",
//     //         age:22,
//     //     }
//     // ])

//     // db.collection("tasks").insertMany([
//     //   {
//     //     description: "clean the house",
//     //     completed: true,
//     //   },
//     //   {
//     //     description: "renew imspection",
//     //     completed: false,
//     //   },
//     //   {
//     //     description: "pot plants",
//     //     completed: false,
//     //   },
//     // ]);

//     // const id = new ObjectID();
//     // console.log(id);

//     db.collection("tasks")
//       .updateMany(
//         {
//           completed: false,
//         },
//         {
//           $set: {
//             completed: true,
//           },
//         }
//       )
//       .then((result) => {
//         console.log(result.modifiedCount);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     db.collection("tasks")
//       .deleteOne({
//         description: "Clean the house",
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );
