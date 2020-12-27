import React, { useState } from "react";
import "./styles.css";
let changes = {
  "2000": 0,
  "500": 0,
  "100": 0,
  "20": 0,
  "10": 0,
  "5": 0,
  "2": 0,
  "1": 0
};
const currency = Object.keys(changes).reverse();
export default function App() {
  const [output, setOutput] = useState("none");
  const [bill, setBill] = useState("");
  const [cash, setCash] = useState("");

  function fetchBill(event) {
    setBill(event.target.value);
  }
  function fetchCash(event) {
    setCash(event.target.value);
  }
  function fetchChange(event) {
    let change = cash - bill;
    if (change < 0) {
      alert("Please enter cash value larger than bill Value");
    } else {
      for (var i = 0; i < currency.length; i++) {
        if (currency[i] <= change) {
          let x = Math.floor(change / currency[i]);
          change -= currency[i] * x;
          changes[currency[i]] = x;
        }
      }

      setOutput("block");
    }
  }
  return (
    <div className="App final">
      <h1>Cash Manager App</h1>
      <h2>Enter bill Amount</h2>
      <input id="billAmt" type="number" onChange={fetchBill} />
      <h2>Cash received from customer</h2>
      <input id="cashReceived" type="number" onChange={fetchCash} />
      <br />
      <button onClick={fetchChange}>Submit</button>
      <div className="final" style={{ display: output }}>
        <div className="container-general-2 ">
          <div className="container-result-1">
            {currency.map((item) => {
              return <span key={item}>{item}</span>;
            })}
          </div>
          <div className="container-result">
            {currency.map((item) => {
              return <span key={item}>:</span>;
            })}
          </div>
          <div className="container-result-2">
            {currency.map((item, index) => {
              return <span key={index}>{changes[item]}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
