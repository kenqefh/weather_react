import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers'

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'day-showers'
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