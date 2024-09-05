import React, { useState } from 'react';
import { getPlayerByCountry } from '../services/ChessAPIService';
import '../styling/PlayerCard.css';

const PlayerCards = () => {
    const [players, setPlayers] = useState([]);
    const [country, setCountry] = useState('');
    const [field, setField] = useState('');

    const fetchPlayers = async () => {
        if (country && field) {
            const data = await getPlayerByCountry(country, field);
            if (data) {
                setPlayers(data);
            } else {
                console.error('No players found for the given country and field.');
            }
        } else {
            alert('Please enter both country and field');
        }
    };

    return (
        <>
            <div className="input-group">
                <label>Country:</label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter country"
                />

                <label>Field:</label>
                <input
                    type="text"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder="Enter field (e.g., first_name)"
                />

                <button onClick={fetchPlayers}>Submit</button>
            </div>

            <div className="player-list">
                {players.length > 0 ? (
                    players.map((player, index) => (
                        <div key={index} className="player-card">
                            <p>{player.firstName} {player.lastName}</p>
                            <p>Player-ID: {player.playerID}</p>
                            <p>Country: {player.country}</p>
                            <p>Rating: {player.currentWorldRanking}</p>
                            <p>Matches Played: {player.totalMatchesPlayed}</p>
                        </div>
                    ))
                ) : (
                    <p>No players found. Please try a different search.</p>
                )}
            </div>
        </>
    );
};

export default PlayerCards;
