import React, { useState } from "react";
import Keys from "./keys";
import Display from "./display";
import { keys } from "../utils/constants";
import useCalculator from "../hooks/useCalculator";

const Calculator = () => {
  const {
    display,
    isRad,
    useHandleButtonClick, // Use the renamed function
  } = useCalculator(); // Use the custom hook

  return (
    <div className="min-w-[700px] bg-black flex flex-col gap-4 p-4 rounded-2xl">
      <Display display={display} />
      <div className="grid grid-cols-[repeat(7,1fr)] gap-[0.3rem]">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={
              item === "=" ? "equal-btn" : item === "Rad | Deg" ? "deg-btn" : ""
            }
            isRad={isRad}
            onButtonClick={(value) => useHandleButtonClick(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
