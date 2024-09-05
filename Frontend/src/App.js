import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewItem from './components/ViewItem';
import AddMatchForm from './components/AddItem';
import WinPercentage from './components/WinPercentage';
import AverageWins from './components/AverageWins';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view" element={<ViewItem />} />
                <Route path="/add" element={<AddMatchForm />} />
                <Route path="/win-percentage" element={<WinPercentage />} />
                <Route path="/average-wins" element={<AverageWins />} />
            </Routes>
        </Router>
    );
};

export default App;
