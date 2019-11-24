import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import sun from "./sun.png";

export default function Location() {
  let [city, setCity] = useState("Paris", "");
  let [temperature, setTemperature] = useState(" ");
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");

  function showInfo(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=f58b0854457e2f05df673d838cf4e8ca`;

    axios.get(apiUrl).then(showInfo);
  }

  return (
    <div>
      <Container className="Location">
        <Row>
          <Col xs={8} md={4}>
            <h1 id="city">{city}</h1>
            <h4 id="day-hour">12:00</h4>
            <h4 id="descrip">{description}</h4>
          </Col>
          <Col xs={4} md={3}>
            <a type="submit" href="#" id="current-location">
              Current City
            </a>
          </Col>
          <Col xs={12} md={5}>
            <form action="" id="search-city" onSubmit={handleSubmit}>
              <input
                type="search"
                class="form-control"
                id="city-input"
                aria-describedby="emailHelp"
                placeholder="Enter city name"
                onChange={handleCity}
              />
              <button type="submit" class="btn btn-outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <Container className="Temp">
        <Row className="row">
          <Col xs={8} md={6}>
            <img src={sun} alt="clear" id="main-icon" className="main-image" />
          </Col>
          <Col xs={4} md={6}>
            <div className="row weather-temp">
              <h2>
                <span id="temperature" />
                {temperature}
                <span className="unit">
                  <a href="#" id="celsius-link" className="active">
                    {" "}
                    <small>ºC</small>
                  </a>
                  |
                  <a href="#" id="fahrenheiht-link" className="">
                    {" "}
                    <small>ºF</small>
                  </a>
                </span>
              </h2>
              <ul>
                <li>
                  Humidity: <span id="humidity" />
                  {humidity}
                  <span className="simbol"> %</span>{" "}
                </li>
                <li>
                  Wind: <span id="wind" /> {wind}
                  <span className="simbol"> Km/h</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
