import React from "react";
import initialImage from "../assets/initialImage.jpg";

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
  const imageSrc = props.imgURL ? props.imgURL : initialImage;

  return (
    <div className={`choice-card ${result}`}>
      <h1>{props.title}</h1>
      <img src={imageSrc} />
      <h3>{props.winner && result.toUpperCase()}</h3>
    </div>
  );
}
