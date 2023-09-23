import Caret from "./Caret";
import cn from "classnames";
const UserTypings = ({
  userInput,
  words,
  className,
}: {
  userInput: string;
  words: string;
  className: string;
}) => {
  const typedCharacter = userInput.split("");

  return (
    <div className={className}>
      {typedCharacter.map((char, index) => {
        return (
          <Character
            actual={char}
            key={`${char}_${index}`}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
};

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const iswhiteSpace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !iswhiteSpace,
        " text-primary-400": isCorrect && !iswhiteSpace,
        "bg-red-500/50": !isCorrect && iswhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTypings;
