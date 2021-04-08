import React from 'react';
import playerData from '../../fakedata/data.json';
import { useState, useEffect } from 'react';
import './Player.css';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import Team from '../Team/Team'
const Player = () => {

    const [players, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
        console.log(playerData);
    }, []);
    const [team, setTeam] = useState([]);

    const addPlayer = (player) => {
        const newTeam = [...team, player];
        setTeam(newTeam);
    }

    return (
        <div className="player-container">
            <div className="player-details">
                {
                    players.map(pl => <SinglePlayer addPlayer={addPlayer} player={pl} key={pl.id}></SinglePlayer>)
                }
            </div>
            <div className="player-transaction">
               <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Player;