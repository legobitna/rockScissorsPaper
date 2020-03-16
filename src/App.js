import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
}



const judgement = (uChoice, cChoice) =>{
    if(uChoice === cChoice) return 'TIE';
    else if (uChoice==='rock') return cChoice === 'scissors'?'WIN':'LOSE';
    else if (uChoice==='scissors') return cChoice === 'paper'?'WIN':'LOSE';
    else if (uChoice==='paper') return cChoice === 'rock'?'WIN':'LOSE';
    return 'dd';
}

const randomChoice= () =>{
  const keys = Object.keys(CHOICES);
  const randomNum = Math.floor(Math.random()*keys.length);
  const randomName = keys[randomNum];

 
  return CHOICES[randomName];
}

const addHistory=(value)=>{
  return <li>{value}</li>
}
function App() {
  
const [userChoice, setUserChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult]=useState(null);
const [history,setHistory]=useState([]);


const onplay =(value) =>{
  setUserChoice(CHOICES[value]);
  let a = randomChoice()
  setComputerChoice(a);
  let resultShow = judgement(CHOICES[value].name,a.name)
  setResult(resultShow);
  history.push(addHistory(resultShow))
  setHistory(history)
  
}

console.log(userChoice,computerChoice,result);

  return (
    <div >
     <NavBar></NavBar>
    <div className="board">
      <ChoiceCard
      title ="you"
      winner={result}
      imgURL={userChoice && userChoice.url} />
      <ChoiceCard
       title ="computer"
       winner={result}
       imgURL={computerChoice && computerChoice.url} />
       <ul id="history">
         {history}
       </ul>
    </div>
    <button onClick={()=> onplay('rock')}>Rock</button>
    <button onClick={()=> onplay('scissors')}>scissors</button>
    <button onClick={()=> onplay('paper')}>paper</button>
    </div>
    
  );
}

export default App;
