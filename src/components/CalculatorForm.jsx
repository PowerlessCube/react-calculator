import { ACTIONS, BUTTON_KEY_VALUES } from "../constants";
import Button from "./Button";

const CalculatorForm = ({ dispatch }) => {
  return (
    <form
      onSubmit={() =>
        dispatch({
          type: ACTIONS.CALCULATE_EXPRESSION,
        })
      }
    >
      {Object.keys(BUTTON_KEY_VALUES).map((key) => (
        <Button key={key} dispatch={dispatch} action={BUTTON_KEY_VALUES[key]}>
          {key}
        </Button>
      ))}
    </form>
  );
};

export default CalculatorForm;
