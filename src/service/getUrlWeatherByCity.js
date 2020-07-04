import { api_key, url_base_weather } from './../constants/api_url'

const getUrlWeatherByCity = location => {
    return `${url_base_weather}?q=${location}&appid=${api_key}`;
}

export default getUrlWeatherByCity;