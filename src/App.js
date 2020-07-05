import React from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Col, Row } from 'react-flexbox-grid'
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
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              <h1>Weather App - Frank</h1>
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities} onSelectedLocation={handleSelectionLocation} />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className='details'></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
