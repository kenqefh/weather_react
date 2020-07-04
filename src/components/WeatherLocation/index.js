import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../service/transformWeather'
import { api_weather } from './../../constants/api_url'
import './styles.css'
import { FOG } from './../../constants/weathers'

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Tocache',
            data: null,
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('compomentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('compomentDidUpdate');
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
                {
                    data ? <WeatherData data={data} />
                        : <CircularProgress size={50} />
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;