import React, { Component } from 'react';

class SwitchButton extends Component {
    constructor(props) { /*initialisation du state */
        super(props);
        this.state = {
            switching: true
        };
    }
    handleChange = () => {
        this.setState({ switching: !this.state.switching });
    };

    render() {
        const changeLight = this.state.switching ? "class1" : "class12";

        return (
            <div className="SwitchButton">

                {/* <img src={logo} className={currentLogo} alt="logo" /> */}


                <button
                    onClick={this.handleChange}
                >{changeLight}
                </button>
            </div>

        );
    }



    //   render() /*le render lie la structure visuelle au condition du state */ {
    //     const light = this.state.on ? 'on' : 'of';
    //     return /*le return renvoit la structure visuelle */(
    //       <div className="SwitchButton">
    //         <button onClick={this.handleClick} className={light}>
    //         {light.toUpperCase()}</button>{/*Interrupteur*/}
    //         <figure className={light} />{/*Ampoule */}
    //       </div>
    //     );
    //   }
    // }
}
export default SwitchButton;