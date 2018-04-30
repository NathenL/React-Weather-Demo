import * as React from "react/cjs/react.development";
import './WeatherCardMini.css';
import Title from "../Title/Title";
import {getWeatherIcon} from "../../utilities/common";
/**
 *
 */
export default class WeatherCardMini extends React.Component {
  imageConfig = {
    height: '75px',
    width: '75px'
  }

  render() {
    return (
      <div className='weather-card-mini' onClick={this.props.onClick}>
        <h2>{this.props.day}</h2>
        <div className='card-mini'>
          <div style={{display: 'flex'}}>
            {getWeatherIcon(this.props.weather, this.imageConfig)}
            <p> {this.props.temp}&deg;F </p>
          </div>
          <p className='details-mini'>
            P: {this.props.precipitation}%
            H: {this.props.humidity}%
          </p>
        </div>
      </div>
    );
  };
}

