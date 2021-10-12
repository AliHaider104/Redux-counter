import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const counter = useSelector((state) => state.counter);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <button className="btn btn-danger" onClick={decrementHandler}>
        DECREMENT
      </button>
      <h4
        style={{
          color: "white",
          margin: "10px",
          fontSize: "100px",
          marginTop: "50px",
        }}
      >
        {counter}
      </h4>
      <button className="btn btn-success" onClick={incrementHandler}>
        INCREMENT
      </button>
    </div>
  );
};

export default Counter;
