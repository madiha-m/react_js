// utils.calculatorUtils.js

import { MAX_LIMIT, OPERATORS } from "./constants";

export const isOperator = (char) => {
  return OPERATORS.includes(char);
};

export const calculateResult = (display, setDisplay, setShowResult) => {
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
};

export const handleButtonClick = (
  value,
  display,
  setDisplay,
  setShowResult,
  isRad,
  setIsRad
) => {
  setShowResult(false);
  if (value === "AC") {
    if (display !== "Error") {
      setDisplay(display.slice(0, -1));
    } else setDisplay(0);
  } else if (isOperator(value)) {
    if (display == "" || isOperator(display[display.length - 1])) return;
    setDisplay(display + value);
  } else if (value === "=") calculateResult(display, setDisplay, setShowResult);
  else if (value === "Rad | Deg") {
    setIsRad(!isRad);
  } else if (display.length >= MAX_LIMIT) {
    alert(`maximum characters allowed : ${MAX_LIMIT}`);
  } else {
    if (display === "0" || display === "") {
      setDisplay(value);
    } else if (display === "Error") {
      setDisplay(value);
    } else setDisplay(display + value);
  }
};
