import React from "react";
import { operationClass, resultClass } from "../utils/styles";

const Display = ({ display }) => {
  return (
    <div className="overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]">
      <div className={resultClass}>Display</div>
      <div className={operationClass}>{display || "0"}</div>
    </div>
  );
};

export default Display;
