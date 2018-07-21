import { BOARD_OPEN } from "../constants";

export default (board = true, action) => {
  return action.type === BOARD_OPEN ? !board : board;
};
