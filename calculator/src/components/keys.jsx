import React from "react";

const Keys = ({ label, keyClass, isRad, onButtonClick }) => {
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
      {label === "Rad | Deg" ? (
        <>
          <span className={isRad ? "text-blue-500" : "text-white"}>Rad</span>
          <span className="text-gray-400 mx-3">|</span>
          <span className={!isRad ? "text-blue-500" : "text-white"}>Deg</span>
        </>
      ) : (
        label
      )}
    </div>
  );
};

export default Keys;
