import React, { Component } from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import clear from "./../img/weather-icons/clear.svg";
import fakeWeatherData from "../fakeWeatherData.json";
import { render } from "react-dom";
import "./../App.css";
 
class HoursWeather extends Component {
  
  render() {
    let data=this.props.data;
    return (
        <section className="hour-weather">
        <ul className="hour-weather-t">
        {data.map((item, key)=> 
          <li  key={key} className="threeAM">
            <time>{new Date(item.dt_txt).getHours().toString().padStart(2, '0')+":00"}</time>
            {this.props.getIcon(item.weather[0].id)}
            <p>{Math.round(item.main.temp)}&#176;C    </p>
          </li>
         )}
          
        </ul>
     
   
    </section>
    );
  }
}
export default HoursWeather;