const INITIAL_STATE = {
  projects: [
    { title: "Project 1", content: "lorem is a content" },
    { title: "Project 2", content: "lorem is a content" }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "hook":
      return { ...state };
    default:
      return state;
  }
};
