import React, { useState } from 'react';
import { addMatch } from '../services/ChessAPIService';
import '../styling/AddMatchForm.css';

const AddMatchForm = () => {
    const [formData, setFormData] = useState({
        player1Id: '',
        player2Id: '',
        matchDate: '',
        matchLevel: '',
        winnerId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addMatch(formData);
            alert('Match added successfully!');
            console.log(result);
        } catch (error) {
            console.error('Error adding match:', error);
            alert('Failed to add match. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Player 1 ID:</label>
                <input type="text" name="player1Id" value={formData.player1Id} onChange={handleChange} />
            </div>
            <div>
                <label>Player 2 ID:</label>
                <input type="text" name="player2Id" value={formData.player2Id} onChange={handleChange} />
            </div>
            <div>
                <label>Match Date:</label>
                <input type="date" name="matchDate" value={formData.matchDate} onChange={handleChange} />
            </div>
            <div>
                <label>Match Level:</label>
                <input type="text" name="matchLevel" value={formData.matchLevel} onChange={handleChange} />
            </div>
            <div>
                <label>Winner ID:</label>
                <input type="text" name="winnerId" value={formData.winnerId} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddMatchForm;
