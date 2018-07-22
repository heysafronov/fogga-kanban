import { TOGGLE_CARDS } from "../constants";

export default (toggleCards = true, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CARDS:
      return toggleCards ? null : payload;

    default:
      return null;
  }
};
