import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

function Location({ city: myCity }) {

    return (
        <div className='locationCont'>
            <h1>{myCity}</h1>
        </div>
    );
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;