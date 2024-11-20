import React from "react";
import "./MainWeatherWindow.css";
const MainWeatherWindow = (props) => {
  const { city, data, children } = props;

  const title = city ? null : <h1 className="title">Weather Forecast</h1>;
  console.log("data", data);
  return (
    <div className="main">
      <div className="inner-main">
        {title}
        <img
          src={data ? `/${data.icon}.svg` : "/01d.svg"}
          alt="weather-icon"
          style={{
            visibility: city ? "visible" : "hidden",
            opacity: city ? "1" : "0",
          }}
        />

        <div
          className="today"
          style={{
            visibility: city ? "visible" : "hidden",
            opacity: city ? "1" : "0",
          }}
        >
          <span>Today</span>
          <h1>{city}</h1>
          <p>Temperature: {data ? Math.round(data.temp - 273.15) : 0}°C</p>
          <p>{data ? data.weather_desc.toLowerCase() : ""}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainWeatherWindow;
