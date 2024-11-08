import axios from 'axios';

const getSpeedTest = async () => {
    try {
        const response = await axios.get('https://api.fast.com/netflix/speedtest');
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching speed test data:', error);
        return null;
    }
};