import axios from 'axios';
const API_KEY = '127b56d0f9c142b1fec47df38d565788';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WETHER = 'FETCH_WETHER';

export function fetchWether(city) {
  const url = `${ROOT_URL}&q=${city},BG`;
  const request = axios.get(url);
  console.log('request: ', request);
  return {
    type: FETCH_WETHER,
    payload: request
  }
}