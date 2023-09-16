import React from "react";
import "./input.css";
import { faker } from "@faker-js/faker";

const words = faker.word.words(20);
console.log(words);
const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
    </>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};
export default App;
