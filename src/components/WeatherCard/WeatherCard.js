import * as React from "react/cjs/react.development";
import './WeatherCard.css';
import Title from "../Title/Title";
import {getWeatherIcon} from "../../utilities/common";

/**
 * Display template for larger detailed weather card
 */
export default class WeatherCard extends React.Component {
  // Weather image display size
  imageConfig = {
    borderRadius: '10px',
    height: '200px',
    width: '200px'
  }

  render() {
    return (
      <div className='weather-card'>
        <h1> </h1>
        <div className='card'>

          {getWeatherIcon('', this.imageConfig)}

          <p className='temp'>  </p>

          <div className='details'>
            
          </div>

        </div>
      </div>
    );
  };
}

