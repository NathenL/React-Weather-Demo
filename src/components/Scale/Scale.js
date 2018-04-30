import * as React from "react/cjs/react.development";

/**
 *
 */
export default class Scale extends React.Component {
  Scale = {
    F: 'Fahrenheit',
    C: 'Celsius'
  };

  render() {
    return (
      <div>
        <button onClick={this.switchScale.bind(this, this.Scale.F)}>F&deg;</button>
        <button onClick={this.switchScale.bind(this, this.Scale.C)}>C&deg;</button>
      </div>
    );
  };

  /**
   * Switches Scale type for app
   * TODO: Implement
   * @param scale
   */
  switchScale(scale) {
    switch (scale) {
      case this.Scale.F:
        console.log('Fahrenheit');
        break;
      case this.Scale.C:
        console.log('Celsius')
        break;
    }
  }
}
