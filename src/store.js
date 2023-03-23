import { legacy_createStore, combineReducers, compose } from "redux";
import { counterReducer } from "./Redux/Counter/counter.reducer";
import { todoReducer } from "./Redux/Todo/todo.reducer";

const createComposer = window.___REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = legacy_createStore(rootReducer, createComposer());

export { store };
