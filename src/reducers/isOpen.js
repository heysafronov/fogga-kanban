export default (isOpen = false, action) => {
  return (action.type === "IS_OPEN"
    ? !isOpen
    : isOpen);
}
