import { normalizedTasks } from "../api/data";

export default (tasks = normalizedTasks, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DELETE_ARTICLE":
      return tasks.filter(task => task.id !== payload.id);
    // пройдемся по статьям и вернем те статьи у которых айдишник не
    // совпадает с тем который мы хотим удалить, который пришел к нам в payload

    default:
      return tasks;
  }
}
