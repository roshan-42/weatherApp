//Using rafc to convert it into component
import React from "react";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import "../weather/WeatherApp.css";

export const WeatherApp = () => {
  return (
    <div>
      <div class="progress-bar">Progressing......</div>

      <div className="container">
        <div className="top-bar">
          <input type="text" className="Cityinput" placeholder="search" />
          <div className="search-icon">
            <img src={search_icon} alt="Search" />
          </div>
        </div>
        <div>
          <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">20º C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          {/* element  */}
          <div className="element">
            <img src={humidity_icon} alt="" />
            <div className="data">
              <div className="humidity-percentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          {/* element  */}
          <div className="element">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="humidity-percentage">18km/r</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
