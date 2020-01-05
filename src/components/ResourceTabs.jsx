import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Metal from "./Metal";
import Nav from "react-bootstrap/Nav";
import Wood from "./Wood";
import WoodPane from "./WoodPane";

class ResourceTabs extends Component {
  state = {
    metal: 0,
    metalps: 0,
    maxMetal: 50,
    wood: 0,
    maxWood: 50
  };

  gainWood = () => {
    if (this.state.wood < this.state.maxWood) {
      this.setState(state => {
        return { wood: state.wood + 1 };
      });
    }
  };

  render() {
    return (
      <Tab.Container
        id="resourceTabs"
        defaultActiveKey="first"
        className="resourceTabs"
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="Metal">
                  {" "}
                  <Row>
                    <Col>Metal</Col>
                    <Col>/Sec</Col>
                    <Col>
                      <span id="metal">{this.state.metal}</span>
                    </Col>
                  </Row>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Gems">Gems</Nav.Link>
              </Nav.Item>
              <Wood wood={this.state.wood} maxWood={this.state.maxWood} />
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Metal">
                <Metal />
              </Tab.Pane>
              <Tab.Pane eventKey="Gems">Gemz</Tab.Pane>
              <WoodPane gainWood={this.gainWood} />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default ResourceTabs;
