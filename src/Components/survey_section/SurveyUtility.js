import React, { useState } from 'react';
import '../../public/SurveyUtility .css';
import Thanks from './thanks';
// import surveydata from '../../Models/surveydata';

const SurveyUtility = ({uid}) => {
  //when database utility is functional 
  // const qs = surveydata.fetchqs();
  //const [questions]=useState(qs);
  
  const [questions] = useState([
    {
      id: 1,
      text: 'How satisfied are you with our products?',
      type: 'rating',
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      text: 'How fair are the prices compared to similar retailers?',
      type: 'rating',
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 3,
      text: 'How satisfied are you with the value for money of your purchase?',
      type: 'rating',
      options: [1, 2, 3, 4, 5]
    },
    {
      id: 4,
      text: 'On a scale of 1-10, how likely are you to recommend us to your friends and family?',
      type: 'rating',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: 5,
      text: 'What could we do to improve our service?',
      type: 'text'
    }
  ]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  console.log(answers,"FGD");
  const handleAnswerSelection = (answer) => {
    setAnswers((prevAnswers) => {
        const isElementPresent = prevAnswers.some((response) => response.questionId === currentQuestionIndex);
        if(isElementPresent){
            const updatedAnsers=prevAnswers;
            updatedAnsers[currentQuestionIndex].answer=answer;
            return updatedAnsers;
        }else{
            const updatedAnsers=[...prevAnswers,{questionId:currentQuestionIndex,answer:answer}];
            return updatedAnsers;
        }
    });//
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const submitHandler=()=>{
    //to submit the response
    //use the surveydata model to submit the response to the database
  // genrate new id using uuid to manage user 
  // const sd = new surveydata(uid,JSON.stringfy(answers));
  // sd.save();
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
   
  }
  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
  if (question.type === 'rating') {
    return (
      <div className="my-4 py-5" >
        <h2 className="text-xl font-bold">Question {currentQuestionIndex + 1}</h2>
        <p className="text-lg">{question.text}</p>
        <ul className="flex justify-center my-4 px-2">
          {question.options.map((option) => (
            <li key={option} className='mx-2'>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md" onClick={() => handleAnswerSelection(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (question.type === 'text') {
    return (
      <div className="my-4">
        <h2 className="text-xl font-bold">Question {currentQuestionIndex + 1}</h2>
        <p className="text-lg">{question.text}</p>
        <textarea className="mt-2 p-2 border rounded w-2/3" rows={3} onChange={(e) => handleAnswerSelection(e.target.value)}></textarea>
      </div>
    );
  }
}
return (
  <div className="survey-form-container">
      { currentQuestionIndex < questions.length ? (
        <div>
          <h1 className='text-center text-xl font-bold subpixel-antialiased'>Code Inbound Customer Survey</h1>
          {renderQuestion()}
          <div className="button-container">
            <button
              className="previous-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentQuestionIndex=== questions.length-1?(
                 <button className="submit-button" onClick={submitHandler}>
                submit
               </button>):
            <button className="skip-button" onClick={handleSkipQuestion}>
              Next
            </button>
}
          </div>
        </div>
      ) : (
        <div>
         <Thanks/>
          {/* Additional content for survey completion */}
        </div>
      )}
    </div>
  );
};
export default SurveyUtility;