import { normalizedTasks } from "../api/data";
import { ADD_TASK, DELETE_TASK } from "../constants";

export default (tasks = normalizedTasks, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_TASK:
      return tasks.filter(task => task.id !== payload.id);

    case ADD_TASK:
      return tasks.concat(payload);

    default:
      return tasks;
  }
};
