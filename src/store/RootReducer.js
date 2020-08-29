import { combineReducers } from "redux";
import ToDoReducer from "./ToDo/ToDoReducer";

const RootReducer = combineReducers({
  ToDoReducer: ToDoReducer
});

export default RootReducer;
