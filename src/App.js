import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title/Title";
import Scale from "./components/Scale/Scale";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherWeek from "./components/WeatherWeek/WeatherWeek";
import Location from "./components/Location/Location";

class App extends Component {
  render() {
    const weatherCincinnati = [
      {day: 'Monday', weather: 'ThunderStorm', temp: 67, precipitation: 100, humidity: 80, wind: 17},
      {day: 'Tuesday', weather: 'Rain', temp: 72, precipitation: 90, humidity: 75, wind: 12},
      {day: 'Wednesday', weather: 'Cloudy', temp: 70, precipitation: 20, humidity: 75, wind: 10},
      {day: 'Thursday', weather: 'Cloudy', temp: 68, precipitation: 10, humidity: 63, wind: 10},
      {day: 'Friday', weather: 'CloudyDay', temp: 75, precipitation: 0, humidity: 70, wind: 7}
    ];

    const weatherLosAngeles = [
      {day: 'Monday', weather: 'Hot', temp: 95, precipitation: 0, humidity: 62, wind: 5},
      {day: 'Tuesday', weather: 'Clear', temp: 83, precipitation: 0, humidity: 65, wind: 3},
      {day: 'Wednesday', weather: 'Clear', temp: 88, precipitation: 0, humidity: 60, wind: 5},
      {day: 'Thursday', weather: 'Cloudy', temp: 75, precipitation: 5, humidity: 70, wind: 10},
      {day: 'Friday', weather: 'Rain', temp: 67, precipitation: 60, humidity: 80, wind: 14}
    ];

    return (
      <div style={{backgroundColor: 'white', width: '70%',  margin: 'auto'}}>
        <Title title="React Weather"/>
        <Location location='Cincinnati, OH' weather={weatherCincinnati}/>
        <Location location='Los Angeles, CA' weather={weatherLosAngeles}/>
      </div>
    );
  }
}

export default App;
