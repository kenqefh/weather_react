import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../service/transformWeather'
import { api_weather } from './../../constants/api_url'
import './styles.css'
import { FOG } from './../../constants/weathers'

const data = {
    temperature: 25,
    weatherState: FOG,
    humidity: 50,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Tocache',
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;