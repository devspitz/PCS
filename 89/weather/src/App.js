import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    zips: ['44118', '08701'],
    DataisLoaded: false
  };

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zips[0]}&appid=cb7c71219cf09eb0bb414b932669be97&units=imperial`)
      .then((res) => res.json())
      .then((weatherData) => {
        this.setState({
          items: weatherData,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    console.log(items);
    if (!DataisLoaded) return <div> <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <div className="container text-center">
          <h1>Choose a US Zip to see the weather</h1>
<div>
          <ul>
            <li><button className="btn btn-dark">08701</button></li>
            <li><button className="btn btn-dark">44118</button></li>
            <li><button className="btn btn-dark">44122</button></li>
          </ul>
            </div>
            <div className="container">
          <input className='input-group input-group-sm mb-3 col-md-auto' placeholder='or enter a zip here' />
          </div>
        </div>
        {this.state.items ? <WeatherDetails weather={this.state.items}/> : <h1> Please wait some time.... </h1>}

      </div>
    );
  }
}
export default App;


