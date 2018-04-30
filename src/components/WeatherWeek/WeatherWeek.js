import * as React from "react/cjs/react.development";
import './WeatherWeek.css'
import Title from "../Title/Title";
import {getWeatherIcon} from "../../utilities/common";
import WeatherCardMini from "../WeatherCardMini/WeatherCardMini";
/**
 *
 */
export default class WeatherWeek extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedDay: {}
    }
  }

  // Default day to first of the week
  componentWillMount(){
    this._onDaySelected(this.props.week[0]);
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        {this._getWeather(this.props.week)}
      </div>
    );
    /*return (
      <div style={{display: 'flex'}}>
        <WeatherCardMini day="Mon" weather="ThunderStorm"/>
        <WeatherCardMini day="Tue" weather="Rain"/>
        <WeatherCardMini day="Wed" weather="Clear"/>
        <WeatherCardMini day="Thu" weather="Cloudy"/>
        <WeatherCardMini day="Fri" weather="Windy"/>
      </div>
    );*/
  };

  _onDaySelected(day){
    this.setState({selectedDay: day});
    this.props.onSelectDay(day);
    console.log("Changed: ", day)
  }

  _getWeather(week){
    return week.map((day) => {
      return (
        <div onClick={this._onDaySelected.bind(this, day)} className={(day === this.state.selectedDay) ? 'selected' : ''}>
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

