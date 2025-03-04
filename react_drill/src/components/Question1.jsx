import React, { useState } from "react";

const Question1 = () => {
  const [count, setCount] = useState(0);
  const handlerCountChange = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // This is the problematic line
  };
  return (
    <div>
      <div>
        <h5>IsStateUpdateCorrect?</h5>
        <p>While click on 1 time, 1 value increase.</p>
        <p>
          Problem: what to change the increment like 4, 5 or multiple numbers,
          not 1
        </p>
        <p>
          <button onClick={handlerCountChange}>Click me</button>
        </p>
        <p>Current count: {count}</p>
      </div>
      <div>
        <p>Solution</p>
        <p>handler main setCount(count+1) as arg ly ra hy, 3, 4 times hy </p>
        <p>setCount(count+1);</p>
        <p>setCount(count+1);</p>
        <p>setCount(count+1);</p>
        <p>
          look multiple times. it increment count value which is 0 currently,
          but abi update ni hoi nect setCount run ho jata. so eeverytime iska
          answer just 1 + ho kr aa ra.{" "}
        </p>
        <p>Solution is use call back fun</p>
        <p>(prev) = &gt; prev + 1</p>
        <p>
          State ko update krany k lye prev state ly k aty hn, then usmin add
          krty hn
        </p>
      </div>
    </div>
  );
};

export default Question1;
