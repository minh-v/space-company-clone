import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Wood extends Component {
  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Wood">
            <Row>
              <Col>Wood</Col>
              <Col>
                <span>{this.props.woodps}/Sec</span>
              </Col>
              <Col>
                <span id="wood">
                  {this.props.wood}/{this.props.maxWood}
                </span>
              </Col>
            </Row>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Wood;
