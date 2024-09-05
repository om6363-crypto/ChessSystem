import React from 'react';
import PlayerCards from './PlayerCard';

const ViewItem = () => {
    return (
        <div className="view-item-container">
            <h1>Player Details</h1>
            <PlayerCards />
        </div>
    );
};

export default ViewItem;