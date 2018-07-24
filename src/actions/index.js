import {
  ADD_TASK,
  BOARD_OPEN,
  DELETE_TASK,
  WHO_OPEN
} from "../constants";

export function boardOpen() {
  return {
    type: BOARD_OPEN
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: { task },
    generateId: true
  };
}

export function whoIsOpen(type) {
  return {
    type: WHO_OPEN,
    payload: type
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: { id }
  };
}

export function XYU(ev, cat) {
  return {
    type: "XYU",
    payload: {ev, cat}
  };
}
