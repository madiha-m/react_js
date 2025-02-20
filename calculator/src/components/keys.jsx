import React from "react";

const Keys = ({ label, keyClass, onButtonClick }) => {
  const equalClass =
    "bg-teal-400 text-[#1a261a] font-bold hover:bg-[#4CCDC6] hover:text-[rgba(255,255,255)]";

  const redClass = "col-span-2";

  return (
    <div
      className={`h-15 bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-[15px] hover:bg-[#4ccdc742]  ${
        keyClass === "equal-btn"
          ? equalClass
          : keyClass === "deg-btn"
          ? redClass
          : ""
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
