const Card = ({ item, isOpen, handleClick }) => {
  const { question, questionID, answer } = item;

  return (
    <div
      className="border border-[#5047bc] p-6 w-[36.5vw] flex flex-col gap-[0.7vw] rounded-2xl cursor-pointer"
        onClick={() => handleClick(questionID)}
    >
      <h1 className="font-bold opacity-[0.9] text-[1.7vw]">
        {questionID}. {question}
      </h1>
      {isOpen && (
        <h4 className="opacity-[0.7] text-[1vw]">{answer}</h4>
      )}
    </div>
  );
};

export default Card;
