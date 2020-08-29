import { ADDTODO, UPDATETODO, REMOVETODO } from "./ToDoTypes";

export const addToDo = (data) => {
  return {
    type: ADDTODO,
    payLoad: data
  };
};

export const updateToDo = (data, index) => {
  return {
    type: UPDATETODO,
    index: index,
    payLoad: data
  };
};

export const removeToDo = (index) => {
  return {
    type: REMOVETODO,
    index: index
  };
};
