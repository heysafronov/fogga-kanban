import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";

export default combineReducers({
  board,
  tasks
});

