import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";
import whoIsOpen from "./whoIsOpen";

export default combineReducers({
  board,
  tasks,
  whoIsOpen
});
