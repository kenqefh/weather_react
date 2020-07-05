import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = _ => (
    <div>
        <WeatherLocation city={'Tocache,pe'} />
        <WeatherLocation city={'Lima,pe'} />
        <WeatherLocation city={'Mexico,mex'} />
    </div>
);

export default LocationList;