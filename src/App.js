import React, { useState } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import "bootstrap/dist/css/bootstrap.min.css";

const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  },
  rock: {
    name: "rock",
    url: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  },
};

const judgement = (uChoice, cChoice) => {
  if (uChoice === cChoice) return "TIE";
  else if (uChoice === "rock") return cChoice === "scissors" ? "WIN" : "LOSE";
  else if (uChoice === "scissors") return cChoice === "paper" ? "WIN" : "LOSE";
  else if (uChoice === "paper") return cChoice === "rock" ? "WIN" : "LOSE";
};

const randomChoice = () => {
  const keys = Object.keys(CHOICES);
  const randomNum = Math.floor(Math.random() * keys.length);
  const randomName = keys[randomNum];

  return CHOICES[randomName];
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const onplay = (value) => {
    setUserChoice(CHOICES[value]);
    let a = randomChoice();
    setComputerChoice(a);
    let resultShow = judgement(CHOICES[value].name, a.name);
    setResult(resultShow);
  };

  return (
    <div>
      <div className="board">
        <ChoiceCard
          title="you"
          winner={result}
          imgURL={userChoice && userChoice.url}
        />
        <ChoiceCard
          title="computer"
          winner={result}
          imgURL={computerChoice && computerChoice.url}
        />
      </div>
      <div className="text-center">
        <i
          class="fa fa-hand-scissors fa-2x"
          onClick={() => onplay("scissors")}
        ></i>
        <i class="fa fa-hand-rock fa-2x" onClick={() => onplay("rock")}></i>
        <i class="fa fa-hand-paper fa-2x" onClick={() => onplay("paper")}></i>
      </div>
      <div class="text-center">
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;
