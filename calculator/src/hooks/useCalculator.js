import { useState } from "react";
import { handleButtonClick } from "../utils/calculatorUtils";

const useCalculator = () => {
  const [display, setDisplay] = useState("");
  const [isRad, setIsRad] = useState(true);
  const [showResult, setShowResult] = useState(false);
  //   const [result, setResult] = useState("");

  const useHandleButtonClick = (value) => {
    handleButtonClick(
      value,
      display,
      setDisplay,
      setShowResult,
      isRad,
      setIsRad
    );
  };

  return {
    display,
    isRad,
    showResult,
    setDisplay,
    setShowResult,
    useHandleButtonClick, // Return the renamed function
  };
};

export default useCalculator;
