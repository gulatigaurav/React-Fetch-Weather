import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class WeatherMessage extends Component {

    render() {
        return (
            <div>

                <h3> Its {this.props.temp} degrees in {this.props.location} </h3>
            </div>

        );
    }
}
export default WeatherMessage;
