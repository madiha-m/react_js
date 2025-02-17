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
    <div className="min-w-[320px] bg-black flex flex-col gap-4 p-4 rounded-2xl">
      <div className="overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]">
        <div>RESULT</div>
      </div>
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
