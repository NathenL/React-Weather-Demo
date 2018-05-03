import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title/Title";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherWeek from "./components/WeatherWeek/WeatherWeek";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title title="React Weather"/>
        <WeatherCard  />
      </div>
    );
  }
}

export default App;
