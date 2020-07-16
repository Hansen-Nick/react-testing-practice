import React, { useState } from "react";

import "./App.css";

function Header() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2 className="styling" data-testid="textCheck">
        {counter}
      </h2>
      <button
        data-testid="up"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Up
      </button>
      <button
        data-testid="down"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Down
      </button>
    </div>
  );
}

export default Header;
