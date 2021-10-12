import React from "react";
import Counter from "./components/counter";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h1 style={{ color: "white", margin: "100px" }}>REDUX COUNTER</h1>
      <Counter />
    </div>
  );
};

export default App;
