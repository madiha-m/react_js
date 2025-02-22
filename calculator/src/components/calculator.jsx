import React, { useState } from "react";
import Keys from "./keys";
import Display from "./display";
import { keys } from "../utils/constants";
import { handleButtonClick } from "../utils/calculatorUtils";

const Calculator = () => {
  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [isRad, setIsRad] = useState(true);

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
            onButtonClick={(value) =>
              (handleButtonClick =
                (value, display, setDisplay, setShowResult, isRad, setIsRad))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
