import { useState } from "react";
import "./App.css";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import ToggleButton from "./components/ToggleButton";

function App() {
  // State to track the currently visible component
  const [visibleComponent, setVisibleComponent] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (component) => {
    setVisibleComponent((prev) => (prev === component ? null : component));
  };

  return (
    <div>
      <h2>Technical Practice Questions</h2>

      {/* Reusable ToggleButton components */}
      <ToggleButton
        onClick={() => handleButtonClick("Q1")}
        label={visibleComponent === "Q1" ? "Hide Q1" : "Show Q1"}
      />
      <ToggleButton
        onClick={() => handleButtonClick("Q2")}
        label={visibleComponent === "Q2" ? "Hide Q2" : "Show Q2"}
      />
      <ToggleButton
        onClick={() => handleButtonClick("Q3")}
        label={visibleComponent === "Q3" ? "Hide Q3" : "Show Q3"}
      />

      {/* Conditionally render the components */}
      {visibleComponent === "Q1" && <Question1 />}
      {visibleComponent === "Q2" && <Question2 />}
      {visibleComponent === "Q3" && <Question3 />}
    </div>
  );
}

export default App;
