import { ACTIONS } from "./constants";

const initialState = [];

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ENTER_CHARACTER:
      return [...state, ...action.payload];

    case ACTIONS.CALCULATE_EXPRESSION:
      // instead of using eval(), it's shit, according to the MDN docs.
      // Also this is kind of dangerous, it's ripe for exploiting.
      const calculatedValue = Function(
        `"use strict";return (${state.join("")})`
      )();
      return [calculatedValue];

    case ACTIONS.DELETE_CHARACTER:
      return state.slice(0, state.length - 1);

    case ACTIONS.CLEAR_CALCULATION:
      return [];
    default:
      return state;
  }
};

export { calculatorReducer, initialState };
