import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
//import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import WoodPane from "./WoodPane";
//import Button from "react-bootstrap/Button";

class Wood extends Component {
  /*
  state = {
    wood: 0,
    maxWood: 50
*/
  gainWood = () => {
    if (this.state.wood < this.state.maxWood) {
      this.setState(state => {
        return { wood: state.wood + 1 };
      });
    }
  };

  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey="Wood">
            <Row>
              <Col>Wood</Col>
              <Col>/Sec</Col>
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
