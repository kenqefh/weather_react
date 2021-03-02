import React, { Component } from "react";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import "./App.css";

const cities = [
  "Tocache,pe",
  "Tingo Maria,pe",
  "Lima,pe",
  "Buenos Aires,ar",
  "Washington dc,us",
  "Bogota,col",
  "Ciudad de México,mx",
  "Madrid,es",
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectionLocation = (city) => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);
  };

  render() {
    const { city } = this.state;

    return (
      <div className="page">
        <header className="header">
          <h1 className="header__title">Weather App | Kenqefh</h1>
        </header>
        <main className="main">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectionLocation}
          />
          <div className="main__detail">
            {city && <ForecastExtended city={city} />}
          </div>
        </main>
        <footer className="footer">@kenqefh</footer>
      </div>
    );
  }
}

export default App;
