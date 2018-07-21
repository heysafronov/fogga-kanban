import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";
import whoOpen from "./whoOpen";

export default combineReducers({
  board,
  tasks,
  whoOpen
});
