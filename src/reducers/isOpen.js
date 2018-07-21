

export default (isOpen = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case "IS_OPEN":
      return payload;

    default:
      return !isOpen;

  }
}
