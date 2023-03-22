import { INC, DEC } from "./counter.actionTypes";

const increment = (value) => {
  return {
    type: INC,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DEC,
    payload: value,
  };
};

export { increment, decrement };
