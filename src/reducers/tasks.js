import { normalizedTasks } from "../api/data";
import { ADD_TASK, DELETE_TASK } from "../constants";

export default (tasks = normalizedTasks, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case DELETE_TASK:
      return tasks.filter(task => task.id !== payload.id);

    case ADD_TASK:
      return tasks.concat({
        ...payload.task,
        id: randomId
      });

    case "XYU":
      let id = payload.ev.dataTransfer.getData("text/html");

      let newtasks = tasks.filter((task) => {
        if (task.id === id) {
          task.type = payload.cat;
        }
        return task;
      });

      return tasks.concat({
        ...tasks,
        newtasks
      });


    default:
      return tasks;
  }
};
