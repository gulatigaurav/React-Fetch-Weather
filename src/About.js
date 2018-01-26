import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class About extends Component {

    render() {
        return (
          <div className='text-center'>
            <br />
            <h3>About us</h3>
            <p> I am Gaurav, just learning React Js and this is my app to check out weather using API by OpenWeatherMap...
              <br />
              Here is my
              <a href='http://www.github.com/gulatigaurav'> Github profile link</a>
            </p>
          </div>
        );
    }
}

export default About;
