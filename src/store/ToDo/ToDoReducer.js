import { ADDTODO, UPDATETODO, REMOVETODO } from "./ToDoTypes";

const initialState = [];

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payLoad];
    case REMOVETODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case UPDATETODO:
      return [
        ...state.slice(0, action.index),
        action.payLoad,
        ...state.slice(action.index)
      ];
    default:
      return state;
  }
};

export default LoginReducer;
