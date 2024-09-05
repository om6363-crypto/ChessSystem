import React, { useEffect, useState } from 'react';
import { getPlayerWinPercentageByAverageOfWins } from '../services/ChessAPIService';
import '../styling/WinPercentage.css';

const AverageWins = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await getPlayerWinPercentageByAverageOfWins();
            if (data) setPlayers(data);
        };
        fetchPlayers();
    }, []);

    return (
        <>
            {players.map((player, index) => (
                <div key={index} className="player-card">
                    <p>{player.fullName}</p>
                    <p>Total Matches Won: {player.totalMatchesWon}</p>
                    <p>Win Percentage: {Math.round(player.winPercentage)}%</p>
                </div>
            ))}
        </>
    );
};

export default AverageWins;
