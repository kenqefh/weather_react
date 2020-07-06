import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import './styles.css'

class ForecastExtended extends Component {
    render() {
        const { city } = this.props
        return (
            <div>
                <h2 className='forecast-title'>
                    Pronostico extendido para {city}
                </h2>
                <ForecastItem />
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended