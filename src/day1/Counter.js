import { useState } from "react";
import "./counter.css";

function Counter(props) {
  const [value, setValue] = useState(props.numberFromApp);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="container">
      <p>starting number from parent component: {props.numberFromApp}</p>
      <p className="mynum">{value}</p>
      <div className="buttons-div">
        <button className="button" onClick={increase}>
          increase
        </button>
        <button className="button" onClick={decrease}>
          decrease
        </button>
      </div>
      <h4 className="warning">
        {value < 0 ? "WARNING, you are now below zero" : ""}
      </h4>
    </div>
  );
}

export default Counter;
