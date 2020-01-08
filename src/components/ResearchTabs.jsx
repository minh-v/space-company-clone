import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Science from "./Science";
import SciencePane from "./SciencePane";

class ResearchTabs extends Component {
  state = {
    science: 0,
    scienceps: 0.0,
    homeScienceKit: 0,
    hskMetalCost: 20,
    hskGemsCost: 15,
    hskWoodCost: 10
  };

  buildHomeScienceKit = () => {
    if (
      // figure out how to pass state between siblings
      //check costs here
      true
    ) {
      this.setState(state => {
        return {
          //metal: this.state.metal - this.state.gemMinerMetalCost,
          //gems: this.state.gems - this.state.gemMinerGemsCost,
          //wood:
          homeScienceKit: this.state.homeScienceKit + 1,
          //scienceps: this.state.homeScienceKit * 0.1, //why doens't this work? doesn't work on the first build
          scienceps: this.state.scienceps + 0.1,
          hskMetalCost: Math.round(this.state.hskMetalCost * 1.1),
          hskGemsCost: Math.round(this.state.hskGemsCost * 1.1),
          hskWoodCost: Math.round(this.state.hskWoodCost * 1.1)
        };
      });
    }
  };

  render() {
    return (
      <Tab.Container
        id="researchTabs"
        defaultActiveKey="first"
        className="researchTabs"
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Science
                science={this.state.science}
                scienceps={this.state.scienceps}
              />
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <SciencePane
                homeScienceKit={this.state.homeScienceKit}
                hskMetalCost={this.state.hskMetalCost}
                hskGemsCost={this.state.hskGemsCost}
                hskWoodCost={this.state.hskWoodCost}
                buildHomeScienceKit={this.buildHomeScienceKit}
              />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default ResearchTabs;
