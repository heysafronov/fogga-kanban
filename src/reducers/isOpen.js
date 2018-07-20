export default (isOpen = null, action) => {
  return (action.type === "IS_OPEN"
    ? isOpen = true
    : isOpen = false);
}
