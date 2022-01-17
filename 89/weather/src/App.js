import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount(theZip) {
    theZip = '44118';
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${theZip}&appid=cb7c71219cf09eb0bb414b932669be97&units=imperial`)
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
          <ul>
            <li><button className="btn btn-primary">08701</button></li>
            <li><button className="btn btn-primary">44118</button></li>
            <li><button className="btn btn-primary">44122</button></li>
          </ul>
        </div>
         <WeatherDetails weather={this.state.items[0]} />
    
      </div>
    );
  }
}
export default App;


