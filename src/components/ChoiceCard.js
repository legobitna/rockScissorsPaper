import React from 'react'

export default function ChoiceCard(props) {
    let result ;
    if(props.title ==='computer'){
        result =  props.winner ==='TIE'?'tie':props.winner ==='WIN'?'loser':'winner'
    }else {
        result = props.winner ==='TIE'?'tie':props.winner ==='WIN'?'winner':'loser'

    }
    return (
        <div className={`choice-card ${result}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL}/>
            <h3>{result.toUpperCase()}</h3>
        </div>
    )
}
