import { ADD_TASK, BOARD_OPEN } from "../constants";

export function boardOpen() {
  return {
    type: BOARD_OPEN
  };
}

export function addTask(type) {
  return {
    type: ADD_TASK,
    payload: type
  };
}

export function isOpen(type) {
  return {
    type: "IS_OPEN",
    payload: type
  };
}