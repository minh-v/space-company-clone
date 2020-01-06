import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Metal extends Component {
  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Metal">
            <Row>
              <Col>Metal</Col>
              <Col>
                <span>{this.props.metalps}/Sec</span>
              </Col>
              <Col>
                <span id="metal">
                  {this.props.metal}/{this.props.maxMetal}
                </span>
              </Col>
            </Row>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Metal;
