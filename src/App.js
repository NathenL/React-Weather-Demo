import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Scale from "./components/Scale";
import WeatherCard from "./components/WeatherCard";
import WeatherWeek from "./components/WeatherWeek";

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', width: '70%',  margin: 'auto'}}>
        <Title title="React Weather"/>
        <Scale/>
        <WeatherCard location="Cincinnati, OH" weather="ThunderStorm" temp="68" precipitation="100" humidity="80" wind="17"/>
        <WeatherWeek/>
        <WeatherCard location="Los Angeles, CA" weather="Hot" temp="90" precipitation="0" humidity="70" wind="7"/>
        <WeatherWeek/>
      </div>
    );
  }
}

export default App;
