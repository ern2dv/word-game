import { useState, useEffect, useRef } from "react";

export default function useCounter(defaultValTime) {
  const TIME_GAME = defaultValTime;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(TIME_GAME);
  const [isTimeRunning, setIsTimeRuning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  const changeHandel = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWord = (text) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  const startGame = () => {
    setIsTimeRuning(true);
    setTimeRemaining(TIME_GAME);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };
  const endGame = () => {
    setIsTimeRuning(false);
    setWordCount(calculateWord(text));
  };
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textAreaRef,
    changeHandel,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}
