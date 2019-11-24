import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Temp() {
  return (
    <Container className="Temp">
      <Row className="row">
        <Col xs={8} md={6}>
          <img
            src="./img/shower.png"
            alt="clear"
            id="main-icon"
            className="main-image"
          />
        </Col>
        <Col xs={4} md={6}>
          <div className="row weather-temp">
            <h2>
              <span id="temperature" />
              {12}
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
                Humidity: <span id="humidity" />{" "}
                <span className="simbol"> %</span>{" "}
              </li>
              <li>
                Wind: <span id="wind" /> <span className="simbol"> Km/h</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
