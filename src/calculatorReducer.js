import { ACTIONS } from "./constants";

const initialState = {
  calculation: [],
};

function looseJsonParse(obj) {
  return Function(`"use strict";return (${obj})`)();
}

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ENTER_CHARACTER:
      return {
        calculation: [...state.calculation, ...action.payload],
      };

    case ACTIONS.CALCULATE_EXPRESSION:
      const calculatedValue = looseJsonParse(state.calculation.join(""));
      return {
        calculation: [calculatedValue],
      };

    case ACTIONS.DELETE_CHARACTER:
      const { calculation } = state;
      return {
        calculation: calculation.slice(0, calculation.length - 1),
      };

    case ACTIONS.CLEAR_CALCULATION:
      return {
        calculation: [],
      };
    default:
      return state;
  }
};

export { calculatorReducer, initialState };
