const location = 'Tocache,pe'
const api_key = '3a3d4bc5f3abd1fa7a9b140209d7fbc4'
const url_base_weather = 'https://api.openweathermap.org/data/2.5/weather'


export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;