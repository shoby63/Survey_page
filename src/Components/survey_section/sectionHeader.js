import React ,{useState} from 'react'
import SurveyUtility from './SurveyUtility';
const { v4: uuidv4 } = require('uuid');
export default function SectionHeader() {
    let uid;
    const [startSurveyClickController,setstartSurveyClickController]=useState(0);
    const clickSurveyHandler=()=>{
        uid=uuidv4();
        setstartSurveyClickController(!startSurveyClickController);
    }
 if(!startSurveyClickController){
    return (
        <div className="container mx-auto w-5/6 p-auto mt-10 h-70 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold subpixel-antialiased">
          Welcome to Code Inbound Survey Page
        </h2>
        <p className="text-center text-xl font-semibold subpixel-antialiased mt-5">
          Take the survey to help us know you better
        </p>
        <button className="py-4 px-8 rounded-lg bg-blue-200 text-black text-lg font-semibold shadow-md hover:bg-blue-300 w-1/2 mt-10" onClick={clickSurveyHandler}>
          Start Survey
        </button>
      </div>
    )
 }else{
    return (
     <SurveyUtility id={uid}/>        
    )
 }
}