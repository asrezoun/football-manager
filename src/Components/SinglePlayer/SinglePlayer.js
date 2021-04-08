import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './SinglePlayer.css';


const SinglePlayer = (props) => {
    //console.log("pl ",props.player);
    const {name,salary,team,img} = props.player;
    return (
        <div className="player">
            <div className="playerImg">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
                <p>Current Team: {team}</p>
                <p>Salary: ${salary}</p>
                <button className="btn btn-primary" onClick={()=>props.addPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Buy Player</button>
            </div>
            
        </div>
    );
};

export default SinglePlayer;