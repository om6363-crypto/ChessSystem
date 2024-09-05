import React, { useEffect, useState } from 'react';
import { getPlayerWinPercentage } from '../services/ChessAPIService';
import '../styling/WinPercentage.css';

const WinPercentage = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await getPlayerWinPercentage();
            if (data) {
                setPlayers(data);
            } else {
                console.error('Failed to fetch win percentage');
            }
        };
        fetchPlayers();
    }, []);

    return (
        <>
            {players.map((player, index) => (
                <div key={index} className="player-card">
                    <p>{player.fullName}</p>
                    <p>Total Matches Won: {player.totalMatchesWon}</p>
                    <p>Win Percentage: {player.winPercentage}%</p>
                </div>
            ))}
        </>
    );
};

export default WinPercentage;
