import * as React from "react/cjs/react.development";
import Title from "./Title";
import {getWeatherIcon} from "../utilities/common";
import MiniWeatherCard from "./MiniWeatherCard";
/**
 *
 */
export default class WeatherWeek extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <MiniWeatherCard day="Mon" weather="ThunderStorm"/>
        <MiniWeatherCard day="Tue" weather="Rain"/>
        <MiniWeatherCard day="Wed" weather="Clear"/>
        <MiniWeatherCard day="Thu" weather="Cloudy"/>
        <MiniWeatherCard day="Fri" weather="Windy"/>
      </div>
    );
  };
}

