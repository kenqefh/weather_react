import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({ weekDay, hour, hour_txt, data }) => (
    <div>
        <h2>{weekDay} - {hour + 5} hs.</h2>
        <WeatherData data={data} />
        <em>{weekDay} - {hour_txt} hs.</em>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    hour_txt: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem