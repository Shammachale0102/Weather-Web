import axios from 'axios';

const API_KEY = '8eaeee7574a24b5d94962655251403';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
