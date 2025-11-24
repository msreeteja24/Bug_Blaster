//Reducer contains two parameters - state and action
//naming convention is - camelCasing
export default function tikcetReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return;
    default:
      return state;
  }
}
