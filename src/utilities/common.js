import React, { Component}  from 'react';

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