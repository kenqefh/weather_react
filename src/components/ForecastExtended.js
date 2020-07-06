import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import transformForecast from './../service/transformForecast'
import './styles.css'
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

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData })
            }
        );
    }

    renderForecastItemDays() {
        return <h2>render Items</h2>
        //return days.map(day => (<ForecastItem weekDay={day} key={day} hour={11} data={data} />))
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