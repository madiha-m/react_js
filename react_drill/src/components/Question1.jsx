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
        <p>
          <ul>
            <li>
              <p>
                React schedules a state update with the value{" "}
                <code>count + 1</code>.
              </p>
            </li>
            <li>
              <p>
                If <code>setCount</code> is called multiple times in the same
                render cycle, all calls will use the{" "}
                <strong>same initial value</strong> of <code>count</code>.
              </p>
            </li>
            <li>
              <p>
                This can lead to unexpected behavior if you rely on the updated
                state immediately.
              </p>
            </li>
          </ul>
        </p>
        <ol start="1">
          <li>
            <p>
              <strong>
                <code>setCount(count + 1)</code>
              </strong>
              :
            </p>
            <ul>
              <li>
                <p>
                  This directly uses the <strong>current value</strong> of{" "}
                  <code>count</code> to update the state.
                </p>
              </li>
              <li>
                <p>
                  If <code>setCount</code> is called multiple times in the same
                  render cycle, it may not work as expected due to how React
                  batches state updates.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>
                <code>setCount((prev) =&gt; prev + 1)</code>
              </strong>
              :
            </p>
            <ul>
              <li>
                <p>
                  This uses the <strong>previous state value</strong> (
                  <code>prev</code>) to update the state.
                </p>
              </li>
              <li>
                <p>
                  It ensures that the state update is based on the most recent
                  value, even if multiple updates are batched together.
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Question1;
