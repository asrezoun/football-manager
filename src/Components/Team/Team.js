import React from 'react';
import './Team.css'

const Team = (props) => {
    const team= props.team;
    const totalBudget = team.reduce((total,pl)=>total+pl.salary,0);
    return (
        <div>
            <div>
            <h2>Your Team</h2>
            <hr/>
            <h4>Total Players: {team.length} </h4>
            <h4>Total Cost: ${totalBudget}</h4>
            </div>
            <div>
                <br/>
                <h3>Player List</h3>
                <hr/>
                {
                    team.map( player => {
                       return( <div className="list">
                            <img src={player.img} alt=""/>
                            <div>
                            <h5>{player.name}</h5>
                            <h6>Salary: ${player.salary}</h6>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Team;