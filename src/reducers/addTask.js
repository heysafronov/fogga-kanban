import { ADD_TASK } from "../constants";

export default (addTask = false, action) => {
  // console.log(action.payload);
  return (action.type === ADD_TASK
    ? !addTask
    : null);
}
