import { ADD_TASK, BOARD_OPEN, WHO_OPEN } from "../constants";

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

export function whoOpen(type) {
  return {
    type: WHO_OPEN,
    payload: type
  };
}
