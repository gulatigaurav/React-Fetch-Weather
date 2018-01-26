import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavLink  } from 'react-router-dom'

class Navbar extends Component {

    onSearch =  (e) => {
        e.preventDefault();
        alert('Not yet wired up');
    }

    render() {
        return (

            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Weather Support</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

        <li className="nav-item">
          <NavLink exact to="/" className = "nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
            </li>


        <li className="nav-item">
          <NavLink exact to="/about" className="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>

        <li className="nav-item">
          <NavLink exact to="/weather" className="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
            </li>

          <li className="nav-item">
            <NavLink exact to="/examples" className="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
              </li>

        </ul>

        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
        <input type='text' className="form-control" placeholder="Enter your City"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        </div>
        </nav>
        </div>


        );
    }
}
export default Navbar;

    //     <h1>Nav Component</h1>
    // <ul>
    //     <li><NavLink exact to="/" class="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
    //     <li><NavLink exact to="/about" class="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
    //     <li><NavLink exact to="/weather" class="nav-link" activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink></li>
    //     <li><NavLink exact to="/examples"  activeclassNameName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
    // </ul>
