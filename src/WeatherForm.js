import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class WeatherForm extends Component {
    onFormSubmit = (e) =>{
        e.preventDefault();
        var location = this.refs.location.value;

        if ( location.length > 0 ){
            this.refs.location.value='';
            this.props.onSearch(location);
        }

    };
    render() {
        return (
            <div>
              <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                <form onSubmit={this.onFormSubmit}>
                  <div className='form-group'>
                    <input type='text' ref='location' className='form-control' placeholder='Enter city'/>
                    </div>
                    <button className='btn btn-outline-primary btn-block'>Get Weather</button>
                </form>
                  </div>
                <div className='col-md-4'></div>
              </div>
            </div>

        );
    }
}
export default WeatherForm;
