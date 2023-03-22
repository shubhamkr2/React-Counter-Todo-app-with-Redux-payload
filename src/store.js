import { legacy_createStore } from "redux";
import { reducer } from "./Redux/Counter/counter.reducer";

const store = legacy_createStore(reducer);

export { store };
