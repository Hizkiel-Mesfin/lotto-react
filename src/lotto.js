import { useState } from "react";
import "./App.css";

function Lotto() {
  const randGenBig = () => {
    return Math.ceil(Math.random() * 49);
  };

  const randGenSmall = () => {
    return Math.ceil(Math.random() * 10);
  };
  const [randArrBig, setBig] = useState([]);
  const [randArrSmall, setSmall] = useState([]);

  const arr = [];
  const arr2 = [];
  const onShow = () => {
    for (let i = 0; i < 1000; i++) {
      const randBig = randGenBig();
      const randSmall = randGenSmall();
      if (!arr.includes(randBig) && arr.length < 6) {
        arr.push(randBig);
      }

      if (arr2.length < 1) {
        arr2.push(randSmall);
      }
    }

    setBig(arr);
    setSmall(arr2);
  };

  const onReset = () => {
    setBig([]);
    setSmall([]);
  };

  return (
    <div className="out">
      <div className="lotto-container">
        <h1>Lotto 6/49</h1>
        <p>Generate lucky numbers</p>
        <ul className="list">
          {randArrBig.map((num, idx) => {
            return (
              <li className="list-item" key={idx}>
                {num}
              </li>
            );
          })}

          {randArrSmall.map((num, idx) => {
            return (
              <li className="last" key={idx}>
                {num}
              </li>
            );
          })}
        </ul>
        <div>
          <button className="btn" onClick={onReset}>
            Reset
          </button>
          <button className="btn" onClick={onShow}>
            Show me lucky numbers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lotto;
