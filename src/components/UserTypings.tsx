const UserTypings = ({
  userInput,
  className,
}: {
  userInput: string;
  className: string;
}) => {
  const typedCharacter = userInput.split("");

  return (
    <div className={className}>
      {typedCharacter.map((char, index) => {
        return <Character letter={char} key={`${char}_${index}`} />;
      })}
    </div>
  );
};

const Character = ({ letter }: { letter: string }) => {
  return <span className="  text-primary-400">{letter}</span>;
};

export default UserTypings;
