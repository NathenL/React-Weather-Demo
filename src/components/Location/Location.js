import * as React from "react/cjs/react.development";
import './Location.css'
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherWeek from "../WeatherWeek/WeatherWeek";

/**
 * Contains all weather cards for a given location
 */
export default class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDay: {day: 'Thursday', weather: 'Cloudy', temp: 68, precipitation: 10, humidity: 63, wind: 10},
    };
  }

  // Default day to first of the week
  componentWillMount(){
    this._setDay(this.props.weather[0]);
  }

  render() {
    return (
      <div className='location'>
        {this._getWeatherCard()}
        <WeatherWeek week={this.props.weather} onSelectDay={this._setDay.bind(this)}/>
      </div>
    );
  };

  _setDay(day){
    this.setState({selectedDay: day});
    console.log("Parent", day);
  }

  _getWeatherCard(){
    return (
      <WeatherCard
        day={this.state.selectedDay.day}
        location={this.props.location}
        weatherType={this.state.selectedDay.weather}
        temp={this.state.selectedDay.temp}
        precipitation={this.state.selectedDay.precipitation}
        humidity={this.state.selectedDay.humidity}
        wind={this.state.selectedDay.wind}
      />
    )
  }
}
