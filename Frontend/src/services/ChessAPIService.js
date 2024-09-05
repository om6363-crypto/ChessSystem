import axios from 'axios';

const url = 'http://localhost:5266/api/Chess';

export const getPlayerByCountry = async (country, column) => {
    try {
        const response = await axios.get(`http://localhost:5266/api/Chess/GetPlayerByCountry`, {
            params: { country, column }
        });
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error('Error fetching players by country:', error);
        return null;
    }
};


export const addMatch = async (match) => {
    try {
        const response = await axios.post(`${url}/AddMatch`, match);
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error('Error adding match:', error);
        return null;
    }
};

export const getPlayerWinPercentage = async () => {
    try {
        const response = await axios.get(`${url}/GetPlayerWinPercentage`);
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error('Error fetching win percentage:', error);
        return null;
    }
};

export const getPlayerWinPercentageByAverageOfWins = async () => {
    try {
        const response = await axios.get(`${url}/GetPlayerWinPercentageByAverageOfWins`);
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error('Error fetching average win percentage:', error);
        return null;
    }
};
