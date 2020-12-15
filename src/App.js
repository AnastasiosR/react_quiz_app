import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
//custom Component made in the Component folder
import {Questionaire} from './components';

//trivia API
const API_URL = "https://opentdb.com/api.php?amount=10";
//Tailwind API
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>

function App() {
 
   const [questions,setQuestions] = useState([]);
   const [currentIndex,setCurrentIndex] = useState(0); 
   const [score,setScore] = useState(0);
   const [gameEnded,setGameEnded] = useState(false);
   useEffect(() => {
  fetch(API_URL)
   .then(res=>res.json())
   .then(data=>{
    setQuestions(data.results); 
    //console.log(data);  
   });


   }, []);

   const handleAnswer = (answer) => {
     const newIndex = currentIndex + 1;
     setCurrentIndex(newIndex);
     //check for answer
     if(answer=== questions[currentIndex].correct_answer){
       //increase the score
      sessionStorage.score = Number(sessionStorage.score) + 1;
      setScore(score + 1);
     }
     if(newIndex >= questions.length){
  //setGameEnded = true;
     }
     

     
   };

  return questions.length>0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
        <h1 className='text-3xl text-white font-bold'>Your score was  {score}</h1>

      ) : (
  
  
         <Questionaire data ={questions[currentIndex]} handleAnswer={handleAnswer}></Questionaire>
      
     )}
     </div>
     ) : (
       <h2 className='text-2xl text-white'>Its loading...</h2>
     );
  

     
    
  
     }

export default App;
