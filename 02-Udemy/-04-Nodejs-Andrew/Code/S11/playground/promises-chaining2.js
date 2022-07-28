require("../task-manager/src/db/mongoose");

const Task = require("../task-manager/src/models/task");

Task.findByIdAndDelete("scla3lj5p69349u3j6gw4549")
  .then((task) => {
    {
      console.log(task);

      return task.countDocuments({ completed: false });
    }
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteAgeCount = async (id, age) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteAgeCount("alsb3lj5p69349u3j6jj4549")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
