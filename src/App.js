import logo from './logo.svg';
import './App.css';

//trivia API
const API_URL = "https://opentdb.com/api.php?amount=10";
//Tailwind API
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
function App() {
  return (
    <div className="container">
      <div className='bg-white text-purple-800 p-10 rounded-lg shadow-md'>
      
      <h2 className='text-2xl'>
        This is where the question will be
     </h2>
      
      </div>   
   <div className=' flex  flex-wrap mt-4 justify-between'>
     <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer 1</button>
     <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer 2</button>
     <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer 3</button>
     <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer 4</button>
   </div>
    </div>
  );
}

export default App;
