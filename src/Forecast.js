import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Forecast() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p>This will be the forecast section!</p>
        </Col>
      </Row>
    </Container>
  );
}
