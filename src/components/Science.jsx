import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Science extends Component {
  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Science">
            <Row>
              <Col>Science Production</Col>
              <Col>
                <span>{this.props.scienceps.toFixed(1)}/Sec</span>
              </Col>
              <Col>
                <span id="Science">{this.props.science.toFixed(1)}</span>
              </Col>
            </Row>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Science;
