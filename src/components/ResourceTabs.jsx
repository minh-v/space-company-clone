import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import Metal from "./Metal";
import Nav from "react-bootstrap/Nav";

class ResourceTabs extends Component {
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
                <Nav.Link eventKey="Metal">Metal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Gems">Gems</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Metal">
                <Metal />
              </Tab.Pane>
              <Tab.Pane eventKey="Gems">Gemz</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default ResourceTabs;
