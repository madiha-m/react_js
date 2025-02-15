import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [billVal, setBillVal] = useState(0);
  const [tipVal, setTipVal] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [totalBill, setTotalBill] = useState("");

  const handleKeyDown = (e) => {
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
      ].includes(e.key)
    ) {
      return;
    }

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const billChange = (e) => {
    let bill = Number(e.target.value); //convert to number

    setBillVal(bill);

    if (bill < 50) {
      setTipPercentage("");
      setTipVal("");
      setTotalBill("");
    } else if (bill >= 50 && bill < 100) {
      setTipPercentage("10%");
      setTipVal(bill / 10);
      setTotalBill(bill + bill / 10);
    } else if (bill >= 100 && bill < 200) {
      setTipPercentage("20%");
      setTipVal(bill / 20);
      setTotalBill(bill + bill / 20);
    } else if (bill >= 200) {
      setTipPercentage("30%");
      setTipVal(bill / 30);
      setTotalBill(bill + bill / 30);
    }
  };

  return (
    <div>
      <label htmlFor="bill">Bill without Tex: </label>
      <input
        name="bill"
        type="text"
        value={billVal}
        onKeyDown={handleKeyDown}
        onChange={billChange}
      />
      <p>Tip Value: {tipVal}</p>
      <p>Tip Percentage: {tipPercentage}</p>
      <p>Bill with Tax: {totalBill}</p>
    </div>
  );
}

export default App;
