import { combineReducers } from "redux";
import board from "./board";
import tasks from "./tasks";
import whoIsOpen from "./whoIsOpen";
import toggleCards from "./toggleCards";

export default combineReducers({
  board,
  tasks,
  whoIsOpen,
  toggleCards
});
