import axios from 'axios';

const API_KEY = '3b4095b77347272313400630'; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export const getExchangeRates = async (baseCurrency: string) => {
  const response = await axios.get(`${BASE_URL}/${baseCurrency}`);
  return response.data;
};