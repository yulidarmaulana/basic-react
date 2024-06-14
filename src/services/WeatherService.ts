import axios from 'axios';
import { WeatherData } from '../store/weather';

const apiKey = '7f78f9c91b770d9798afcafb191b369d';

export const getWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return response.data;
};
