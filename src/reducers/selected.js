import { SELECT } from "../constants";

export default (selected = false, action) => {
  return action.type === SELECT ? !selected : selected;
};
