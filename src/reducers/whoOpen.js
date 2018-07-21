import {WHO_OPEN} from "../constants"

export default (whoOpen = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case WHO_OPEN:
      return payload;

    default:
      return !whoOpen;

  }
}
