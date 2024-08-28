import { useEffect, useState, useContext } from "react";
import { StorageContext } from "./Context";

const ProgressBar = () => {
    const { handleNext, TIMER, resetTimer } = useContext(StorageContext);
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        setRemainingTime(TIMER); // Reset remainingTime whenever TIMER changes

        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 10) {
                    handleNext();
                    resetTimer(); // Reset timer after it finishes
                    return TIMER;
                }
                return prevTime - 10;
            });
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [TIMER, handleNext, resetTimer]);

    return (
        <progress value={remainingTime} max={TIMER} />
    );
}

export default ProgressBar;
