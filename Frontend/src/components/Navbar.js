import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>ChessMaster</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Player</Link></li>
                <li><Link to="/view">View Player</Link></li>
                <li><Link to="/win-percentage">Win Percentage</Link></li>
                <li><Link to="/average-wins">Average Wins</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
