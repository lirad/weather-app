import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const currentWeather = async (city) => {
  const data = await api.get(`weather?q=${city}&units=metric&appid=a24f6738ba9b0611a52d8603e12042f0`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return data;
};


export { currentWeather };