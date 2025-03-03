// components/ToggleButton.jsx
import React from "react";

const ToggleButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ToggleButton;
