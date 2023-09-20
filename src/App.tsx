import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import "./input.css";

const words = faker.word.words(20);
console.log(words);
const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={60} />
      <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={"test"} />
      </div>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-400">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};
export default App;
