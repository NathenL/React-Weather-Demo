import * as React from "react/cjs/react.development";
import Title from "./Title";
import {getWeatherIcon} from "../utilities/common";

/**
 *
 */
export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: false
    };
  }

  imageConfig = {
    height: '200px',
    width: '200px'
  }

  render() {
    return (
      <div style={{display: 'inline-block', width: 'auto', margin: '0 auto', left: '15%', position: 'relative'}}>
        <Title title={this.props.location}/>
        <div style={{display: 'flex'}}>
          {getWeatherIcon(this.props.weather, this.imageConfig)}
          <p style={{fontSize: '50px'}}> {this.props.temp}&deg;F </p>
          <div style={{}}>
            <p>Precipitation: {this.props.precipitation}%</p>
            <p>Humidity: {this.props.humidity}%</p>
            <p>Wind: {this.props.wind} MPH</p>
          </div>
        </div>
      </div>
    );
  };
}

