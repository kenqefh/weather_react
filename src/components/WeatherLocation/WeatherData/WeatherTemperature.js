import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    SNOW,
    SUN,
    WINDY
} from '../../../constants/weathers'

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [FOG]: 'day-fog',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [SUN]: 'day-sunny',
    [WINDY]: 'windy'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState] || 'day-sunny';
    const sizeIcon = '3x'

    return (
        <WeatherIcons className='wIcon' name={icon} size={sizeIcon} />
    )
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{temperature}</span>
        <span className='temperatureType'>°C</span>
    </div>
);

WeatherTemperature.propType = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;