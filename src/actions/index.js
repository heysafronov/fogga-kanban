import { ADD_TASK, BOARD_OPEN } from "../constants";

export function boardOpen() {
  return {
    type: BOARD_OPEN
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function isOpen(type) {
  return {
    type: "IS_OPEN",
    payload: type
  };
}