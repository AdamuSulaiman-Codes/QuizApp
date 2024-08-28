import { createContext } from "react";

export const StorageContext = createContext({
    index: 0,
    nextData: {},
    handleStart: ()=>{},
    handleNext: ()=>{},
    handleSelect: ()=>{},
    score: 0,
    dataArr: [{}],
    TIMER: 5000,
    resetTimer: ()=>{},
})