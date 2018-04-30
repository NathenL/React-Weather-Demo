import * as React from "react/cjs/react.development";
import './WeatherCard.css';
import Title from "../Title/Title";
import {getWeatherIcon} from "../../utilities/common";

/**
 * Display template for larger detailed weather card
 */
export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: false
    };
  }

  // Weather image display size
  imageConfig = {
    borderRadius: '10px',
    height: '200px',
    width: '200px'
  }

  render() {
    return (
      <div className='weather-card'>
        <h1>{this.props.location}</h1>
        <div className='card'>

          {getWeatherIcon(this.props.weatherType, this.imageConfig)}

          <p className='temp'> {this.props.temp}&deg;F </p>

          <div className='details'>
            <h2>{this.props.day}</h2>
            <p>Precipitation: {this.props.precipitation}%</p>
            <p>Humidity: {this.props.humidity}%</p>
            <p>Wind: {this.props.wind} MPH</p>
          </div>

        </div>
      </div>
    );
  };
}

