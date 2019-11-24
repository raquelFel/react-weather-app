import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Location() {
  return (
    <Container className="Location">
      <Row>
        <Col xs={8} md={4}>
          <h1 id="city">Paris</h1>
          <h4 id="day-hour">12:00</h4>
          <h4 id="descrip">Light rain and showers</h4>
        </Col>
        <Col xs={4} md={3}>
          <a type="submit" href="#" id="current-location">
            Current City
          </a>
        </Col>
        <Col xs={12} md={5}>
          <form action="" id="search-city">
            <input
              type="search"
              class="form-control"
              id="city-input"
              aria-describedby="emailHelp"
              placeholder="Enter city name"
            />
            <button type="submit" class="btn btn-outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
