import { useState } from "react";
import Main from "./Component/Main";
import Data from "./DATA/data";
import { shuffleArray } from "./DATA/util";
import { StorageContext } from "./Component/Context";

const newData = shuffleArray(Data);

const App = () => {
  const [currentDataIndex, setCurrentDataIndex] = useState(-1);
  const [next, setNext] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5000);

  function handleNext() {
    if (currentDataIndex < newData.length - 1) {
      const newIndex = currentDataIndex + 1;
      setCurrentDataIndex(newIndex);
      setNext(newData[newIndex]);
      resetTimer(); // Reset the timer on the next question
    } else {
      setNext(null);
    }
  }

  function handleStart() {
    const newIndex = currentDataIndex + 1;
    setCurrentDataIndex(newIndex);
    setNext(newData[newIndex]);
    resetTimer(); // Reset the timer when starting
  }

  function handleSelect(data) {
    if (data.isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    handleNext(); // Move to the next question
  }

  function resetTimer() {
    setTimer(5000);
  }

  const ctxValues = {
    index: currentDataIndex,
    nextData: next,
    handleStart,
    handleNext,
    handleSelect,
    score,
    TIMER: timer,
    resetTimer,
    dataArr: newData,
  };

  return (
    <StorageContext.Provider value={ctxValues}>
      <Main />
    </StorageContext.Provider>
  );
}

export default App;
