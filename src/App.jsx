import { useState } from "react";
import Card from "./FaqComponents/Card";
import Header from "./FaqComponents/Header";
import Main from "./FaqComponents/Main";
import questions from "./questionsList";

const App = () => {
  //------------------for faq component-----------------------------------------------
  // const [openId, setOpenId] = useState(questions[0].questionID);

  // function handleClick(id){
  //   setOpenId(prev => id === prev ? prev : id)
  // };
  //------------------------------------------------------------------------------


  //-----------------------for mortgage component-----------------------------------
  //---------------------------------------------------------------------------------

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/*----------------------------------------------------------------*/
      /* <Main>
        <Header />
        {questions.map((item) => (
          <Card
            key={item.questionID}
            item={item}
            isOpen={openId === item.questionID}
            handleClick = {handleClick}
          />
        ))}
      </Main> */
      /*----------------------------------------------------------------*/
      }


      <main className="flex flex-col gap-5 items-start w-[50%] h-[70%] border p-[2vw]">
        <div className="">
          <h1 className="text-[2vw] font-bold">Principle Loan Amount:-</h1>
          <input type="text" className="bg-amber-100 border p-2 rounded-xl"/>
        </div>

        <div className="">
          <h1 className="text-[2vw] font-bold">Interest rate:-</h1>
          <input type="text" className="bg-amber-100 border p-2 rounded-xl"/>
        </div>

        <div className="">
          <h1 className="text-[2vw] font-bold">Length of Loan:-</h1>
          <input type="text" className="bg-amber-100 border p-2 rounded-xl"/>
        </div>
      </main>
    </div>
  );
};

export default App;
