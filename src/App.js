import React from 'react';
import WeatherLocation from './components/WeatherLocation'
import './App.css'

function App() {
  return (
    <div className='App'>
      <WeatherLocation city={'Tocache,pe'} />
      <WeatherLocation city={'Tingo Maria,pe'} />
    </div>
  );
}

export default App;
