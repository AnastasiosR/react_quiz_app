import React, { useState } from 'react';



const Questionaire = ( {  handleAnswer,data: {question,correct_answer,incorrect_answers},
}) => {
const shuffledAnswer = [correct_answer, ... incorrect_answers].sort(() => Math.random() - 0.5); 

return (
    
<div>
<div className='bg-white text-purple-800 p-10 rounded-lg shadow-md'>
      
      <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question}}>
             
     </h2>
      
      </div> 
 
   <div className='grid grid-cols-2 gap-6 mt-6'>
   {shuffledAnswer.map(answer => 
   <button
   className = {
   `${
       correct_answer === answer ? 'bg-purple-300' : 'bg-white'
    } p-4 text-purple-800 font-semibold rounder shadow `}
       onClick= {() => handleAnswer
     (answer)}>
         {answer}
   </button>
   )}

   </div>
</div>
);
};

function shuffle(arr){
    for(let i =0;i<100;i++){
        const idx1 = Math.floor(Math.random() * arr.length);
        const idx2 = Math.floor(Math.random() * arr.length);
    }
}
export default Questionaire;