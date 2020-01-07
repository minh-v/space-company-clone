import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Gems extends Component {
  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Gems">
            <Row>
              <Col>Gems</Col>
              <Col>
                <span>{this.props.gemsps}/Sec</span>
              </Col>
              <Col>
                <span id="Gems">
                  {this.props.gems}/{this.props.maxGems}
                </span>
              </Col>
            </Row>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Gems;
