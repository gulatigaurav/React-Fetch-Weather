import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavLink  } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <div>
                    <h1>Nav Component</h1>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
                    <li><NavLink exact to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink></li>
                    <li><NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
