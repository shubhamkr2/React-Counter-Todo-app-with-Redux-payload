import { INC, DEC } from "./counter.actionTypes";

let initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + action.payload,
      };
    }
    case DEC: {
      return {
        count: state.count - action.payload,
      };
    }
    default:
      return state;
  }
};

export { counterReducer };
