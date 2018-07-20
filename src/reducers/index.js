import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";
import addTask from "./addTask";
import isOpen from "./isOpen";

export default combineReducers({
  board,
  tasks,
  addTask,
  isOpen
});

