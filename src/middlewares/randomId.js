export default store => next => action => {
  if (!action.generateId) return next(action);
  next({
    ...action,
    randomId: newId()
  });
};

function newId() {
  return Math.round(Math.random() * 36 ** 8).toString(36);
}
