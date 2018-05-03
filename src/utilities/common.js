import React, { Component}  from 'react';

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

const Weather = {
  ClearNight: 'images/clear_night.png',
  Clear: './images/sunny.png',
  Cloudy: 'images/cloudy.png',
  CloudyNight: 'images/cloudy_night.png',
  CloudyDay: 'images/cloudy_day.png',
  Cold: 'images/cold.png',
  Hot: 'images/hot.png',
  Lightning: 'images/lightning.png',
  Snow: 'images/snow.png',
  Rain: 'images/rain.png',
  ThunderStorm: 'images/thunder_storm.png',
  Windy: 'images/windy.png',
  Unknown: 'images/unknown.png'
};

export function getWeatherIcon(weather, config){
  for (let W in Weather){
    if (weather === W){
      return <img style={config} src={Weather[W]}/>
    }
  }
  return <img style={config} src={Weather.Unknown}/>
}