import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Technologies extends Component {
  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Technologies">
            <Row>
              <Col>Technologies</Col>
            </Row>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Technologies;
