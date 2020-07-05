import React from 'react';
import LocationList from './components/LocationList'
import './App.css'

const cities = [
  'Tocache,pe',
  'Tingo Maria,pe',
  'Lima,pe',
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
];

function App() {
  return (
    <div className='App'>
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
