const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "login":
      return { ...state };
    default:
      return state;
  }
};
