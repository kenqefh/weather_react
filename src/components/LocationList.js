import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => (
    <div>
        <WeatherLocation city={'Tocache,pe'} />
        <WeatherLocation city={'Lima,pe'} />
        <WeatherLocation city={'Mexico,mex'} />
        <WeatherLocation city={'Washington,us'} />
        <WeatherLocation city={'Barcelona,es'} />
        <WeatherLocation city={'Bogota,col'} />
        <WeatherLocation city={'Buenos Aires,ar'} />
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;