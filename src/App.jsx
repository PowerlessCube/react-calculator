import React from "react";

import { calculatorReducer, initialState } from "./calculatorReducer";
import DisplayResult from "./components/DisplayResults";
import CalculatorForm from "./components/CalculatorForm";
import "./App.css";

//TODO: Display typed in numbers and commands

function App() {
  const [state, dispatch] = React.useReducer(calculatorReducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <DisplayResult calculation={state.calculation} />
        <CalculatorForm dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
