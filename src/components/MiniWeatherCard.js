import * as React from "react/cjs/react.development";
import Title from "./Title";
import {getWeatherIcon} from "../utilities/common";
/**
 *
 */
export default class MiniWeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: false
    };
  }

  imageConfig = {
    height: '75px',
    width: '75px'
  }

  render() {
    return (
      <div style={{paddingLeft: '10px'}}>
        <h2>{this.props.day} </h2>
        <div style={{backgroundColor: '#2561a0', color: 'white', border: 'solid', padding: '10px'}}>
          <div style={{display: 'flex'}}>
            {getWeatherIcon(this.props.weather, this.imageConfig)}
            <p style={{fontSize: '30px'}}> 67&deg;F </p>
          </div>
          <p style={{margin: 'auto'}}>P: 5%  H: 10%</p>
        </div>

      </div>
    );
  };
}

