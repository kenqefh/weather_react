import React from 'react';
import LocationList from './components/LocationList'
import './App.css'

const cities = [

];

function App() {
  return (
    <div className='App'>
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
