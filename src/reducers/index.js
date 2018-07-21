import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";
// import addTask from "./addTask";
import whoOpen from "./whoOpen";

export default combineReducers({
  board,
  tasks,
  whoOpen
});

