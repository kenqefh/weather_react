import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../service/transformForecast';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}
*/
const api_key = '3a3d4bc5f3abd1fa7a9b140209d7fbc4'
const url = 'api.openweathermap.org/data/2.5/forecast'
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
class ForecastExtended extends Component {
    constructor() {
        super()
        this.state = { forecastData: null }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`
        console.log(url_forecast)
        fetch(url_forecast, { method: 'GET' })
            .then(res => res.json())
            .then(data => console.log(data))
        //.catch(err => console.log(err))
        /*
                fetch(url_forecast, { method: 'GET' }).then(
                    data => (data.json())
                ).then(
                    weather_data => {
                        console.log(weather_data);
                        const forecastData = transformForecast(weather_data);
                        console.log(forecastData);
                        this.setState({ forecastData })
                    }
                ).catch(error => console.log(`Cant conected: ${error}`));
                */
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
            />))
    }

    renderProgress() {
        return <h4>Cargando pronostico extendido</h4>
    }

    render() {
        const { city } = this.props
        const { forecastData } = this.state
        return (
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended