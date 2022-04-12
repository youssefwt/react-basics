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
    <div className="mycontainer">
      <p className="text-primary">
        starting number from parent component: {props.numberFromApp}
      </p>
      <p className="mynum">{value}</p>
      <div className="buttons-div">
        <button className="btn btn-success mx-2" onClick={increase}>
          increase +
        </button>
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease -
        </button>
      </div>
      <h6 className="warning mt-3">
        {value < 0 ? "WARNING, you are now below zero" : ""}
      </h6>
    </div>
  );
}

export default Counter;
