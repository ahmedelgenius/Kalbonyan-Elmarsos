require("../task-manager/src/db/mongoose");

const User = require("../task-manager/src/models/user");

User.findByIdAndUpdate("alsb3lj5p69349u3j6jj4549", { age: 1 })
  .then((user) => {
    {
      console.log(user);

      return User.countDocuments({ age: 1 });
    }
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

const updateAgeCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeCount("alsb3lj5p69349u3j6jj4549", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
