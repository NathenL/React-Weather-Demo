import * as React from "react/cjs/react.development";
import './WeatherWeek.css'
import Title from "../Title/Title";
import {getWeatherIcon} from "../../utilities/common";
import WeatherCardMini from "../WeatherCardMini/WeatherCardMini";
/**
 *
 */
export default class WeatherWeek extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        {this._getWeather(this.props.week)}
      </div>
    );
  };

  _getWeather(week){
    return week.map((day) => {
      return (
        <div  className={(day === this.state.selectedDay) ? 'selected' : ''}>
          <WeatherCardMini
            day={day.day}
            weather={day.weather}
            temp={day.temp}
            precipitation={day.precipitation}
            humidity={day.humidity}
            key={day.id}
          />
        </div>
      );
    });
  }
}

