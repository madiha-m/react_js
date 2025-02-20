import React, { useState } from "react";
import Keys from "./keys";

const Calculator = () => {
  const keys = [
    "Rad | Deg",
    "x!",
    "(",
    ")",
    "%",
    "AC",
    "Inv",
    "sin",
    "ln",
    "7",
    "8",
    "9",
    "÷",
    "π",
    "cos",
    "log",
    "4",
    "5",
    "6",
    "x",
    "e",
    "tan",
    "√",
    "1",
    "2",
    "3",
    "-",
    "Ans",
    "EXP",
    "xʸ",
    "0",
    ".",
    "=",
    "+",
  ];

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [isRad, setIsRad] = useState(false);

  const maxLimit = 15;

  function calculateResult() {
    if (display.length !== 0) {
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult);
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    } else setDisplay("");
  }

  function handleButton(value) {
    setShowResult(false);
    if (value === "AC") setDisplay(display.slice(0, -1));
    else if (isOperator(value)) {
      if (display == "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    } else if (value === "=") calculateResult();
    else if (value === "Rad | Deg") {
      setIsRad(!isRad);
    } else if (display.length >= maxLimit) {
      alert(`maximum characters allowed : ${maxLimit}`);
    } else {
      if (display === "0" || display === "") {
        setDisplay(value);
      } else if (display === "Error") {
        setDisplay(value);
      } else setDisplay(display + value);
    }
  }

  function isOperator(char) {
    return ["*", "/", "%"].includes(char);
  }

  // const operationClass =
  //   "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end";
  // const resultClass = "text-[1.7rem] text-white";

  const resultClass =
    "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end";
  const operationClass = "text-[1.7rem] text-white";

  return (
    <div className="min-w-[320px] bg-black flex flex-col gap-4 p-4 rounded-2xl">
      <div className="overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]">
        <div className={resultClass}>vvv</div>
        {/* <div className={`${showResult ? operationClass : operationClass}`}> */}
        <div className={operationClass}>{display || "0"}</div>
      </div>
      <div className="grid grid-cols-[repeat(7,1fr)] gap-[0.3rem]">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={
              item === "=" ? "equal-btn" : item === "Rad | Deg" ? "deg-btn" : ""
            }
            isRad={isRad}
            onButtonClick={handleButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
