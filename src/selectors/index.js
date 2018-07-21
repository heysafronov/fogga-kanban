export const filtratedTasksBacklog = state => {
  return state.tasks.filter(task => {
    return task.type === "backlog";
  });
};

export const filtratedTasksProgress = state => {
  return state.tasks.filter(task => {
    return task.type === "progress";
  });
};

export const filtratedTasksReview = state => {
  return state.tasks.filter(task => {
    return task.type === "review";
  });
};

export const filtratedTasksComplete = state => {
  return state.tasks.filter(task => {
    return task.type === "complete";
  });
};
