import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  UPDATE_TODO,
} from "./todo.actionTypes";

let initialState = {
  todo: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };
    }
    case DELETE_TODO: {
      let new_todo = state.todo.filter((todo) => todo.id !== action.payload);
      return {
        todo: [...new_todo],
      };
    }
    case GET_TODO: {
      return {
        ...state,
      };
    }
    case UPDATE_TODO: {
      const new_Todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
          return todo;
        } else {
          return todo;
        }
      });
      console.log(new_Todo);
      return {
        todo: [...new_Todo],
      };
    }
    default:
      return state;
  }
}

export { todoReducer };
