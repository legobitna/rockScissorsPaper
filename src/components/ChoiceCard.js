import React from "react";

export default function ChoiceCard(props) {
  let result;
  if (props.title === "computer") {
    result =
      props.winner === "WIN"
        ? "loser"
        : props.winner === "LOSE"
        ? "winner"
        : "tie";
  } else {
    result =
      props.winner === "WIN"
        ? "winner"
        : props.winner === "LOSE"
        ? "loser"
        : "tie";
  }
  return (
    <div className={`choice-card ${result}`}>
      <h1>{props.title}</h1>
      <img src={props.imgURL} />
      <h3>{result.toUpperCase()}</h3>
    </div>
  );
}
