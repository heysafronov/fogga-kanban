import board from "./board";
import tasks from "./tasks";
import selected from "./selected";
import whoIsOpen from "./whoIsOpen";
import { combineReducers } from "redux";

export default combineReducers({
  board,
  tasks,
  whoIsOpen,
  selected
});
