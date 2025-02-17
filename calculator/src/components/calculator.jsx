import React from "react";
import Keys from "./keys";

const calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "*",
    "-",
    "+",
    "0",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    ".",
    "EQUALS",
  ];

  return (
    <div>
      <div>
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default calculator;
