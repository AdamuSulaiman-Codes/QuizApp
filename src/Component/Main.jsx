import { StorageContext } from "./Context";
import { useContext } from "react";
import ProgressBar from "./ProgressBar";

const Main = () => {
  const { index, handleStart, nextData, handleNext, handleSelect, score, dataArr} = useContext(StorageContext);

  return (
    <>
      {index === -1 ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        nextData ? (
          <div className="container">
            <ProgressBar/>
            <p>{nextData.question}</p>
            <ul>
              {nextData.answers.map((answer) => (
                <li key={answer.id || answer.text}>
                  <button onClick={(event) => handleSelect(answer, event, nextData.answer)}>
                    {answer.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
        :
        <div className="score-container">
          <p>Done</p>
          <p>Score: {score} out of {dataArr.length}</p>
        </div>
      )}
    </>
  );
};

export default Main;
