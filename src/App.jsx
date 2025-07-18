import { useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Main from "./Components/Main";
import questions from "./questionsList";

const App = () => {
  const [openId, setOpenId] = useState(questions[0].questionID);

  function handleClick(id){
    setOpenId(prev => id === prev ? prev : id)
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Main>
        <Header />
        {questions.map((item) => (
          <Card
            key={item.questionID}
            item={item}
            isOpen={openId === item.questionID}
            handleClick = {handleClick}
          />
        ))}
      </Main>
    </div>
  );
};

export default App;
