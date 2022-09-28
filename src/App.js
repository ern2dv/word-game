import React from "react";
import useCounter from "./useCounter";
import "./App.css";

function App() {
  const {
    textAreaRef,
    changeHandel,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useCounter(30);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={changeHandel}
        value={text}
        disabled={!isTimeRunning}
        ref={textAreaRef}
      />
      <h3>Time remaining: {timeRemaining}</h3>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start game
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
