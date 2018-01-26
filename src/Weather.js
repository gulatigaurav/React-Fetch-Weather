import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import axios from 'axios';

const OPEN_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f01ab9183d74ff219384d24f1f1727e0&units=metric';

class Weather extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            location: 'Miami',
            temp: 88
        };
    }

    getData = (location) => {
        let encodedLocation = encodeURIComponent(location);
        let request_url = `${OPEN_URL}&q=${encodedLocation}`;
        console.log(request_url);
        console.log(typeof(fetch(request_url)));

        return axios.get(request_url).then(function (res) {
            if ( res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
             // debugger;
            throw new Error(res.data.message);
        });
        }

    handleSearch = (location) => {
        //    get data from our api and then we need to set location and temp
        //    Make api call in here
        var that =this;

        this.setState({isLoading: true});

        this.getData(location).then(function (temp) {

            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            alert('City not found');
            that.setState({isLoading: false});
              });
    }

    render() {
        let { isLoading, temp, location } = this.state;
        // console.log(temp);
        // console.log(location);
        function renderMessage (){
          if (isLoading){
            return <h3> Fetching data for your city... </h3>;
          }
          else if (temp && location){
            return <WeatherMessage temp={temp} location={location}/>;
          }
        }

        return (
           <div>
               <h3> Get Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
           </div>

        );
    }
}
export default Weather;
