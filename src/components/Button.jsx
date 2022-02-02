const Button = ({ dispatch, action, children }) => {
  return (
    <button
      type="button"
      onClick={() =>
        dispatch({
          type: action,
          payload: children,
        })
      }
    >
      {children}
    </button>
  );
};

export default Button;
