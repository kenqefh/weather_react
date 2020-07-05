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
const handleSelectionLocation = city => {
  console.log(`handleSelectionLocation ${city}`);
}

function App() {
  return (
    <div className='App'>
      <LocationList cities={cities} onSelectedLocation={handleSelectionLocation} />
    </div>
  );
}

export default App;
