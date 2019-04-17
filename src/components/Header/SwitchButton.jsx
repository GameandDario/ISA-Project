import React, { Component } from 'react';

class SwitchButton extends Component {
  constructor(props) { /*initialising states */
    super(props);
    this.state = {
      switching: true
    };
  }
    handleChange = () => {
      this.setState({ switching: !this.state.switching });
    };

    render() {
      const changeLight = this.state.switching ? 'class1' : 'class2';

      return (
        <div className="SwitchButton">
          <button
            onClick={this.handleChange}
          >{changeLight}
          </button>
        </div>
      );
    }
}
export default SwitchButton;