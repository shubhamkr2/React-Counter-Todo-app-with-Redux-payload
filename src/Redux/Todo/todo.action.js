import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO,
} from "./todo.actionTypes";

function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      todo: data,
      status: false,
    },
  };
}
function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
function getTodo() {
  return {
    type: GET_TODO,
  };
}
function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    payload: id,
  };
}

export { addTodo, deleteTodo, getTodo, updateTodo };
