import React, { Component } from "react";
//import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ResourceTabs from "./ResourceTabs";
//import Container from "react-bootstrap/Container";
//import Metal from "./Metal";

class Navtabs extends Component {
  state = {
    researchTabEnabled: false
  };

  enableResearchTab = () => {
    //console.log("toggling state");
    this.setState({
      researchTabEnabled: true
    });
  };
  render() {
    return (
      <div class="container">
        <Tabs defaultActiveKey="Resources" id="Navtabs">
          <Tab eventKey="Resources" title="Resources">
            <ResourceTabs enableResearchTab={this.enableResearchTab} />
          </Tab>
          <Tab
            eventKey="Research"
            title="Research"
            tabClassName={this.state.researchTabEnabled ? "" : "d-none"}
          >
            <p>temp</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Navtabs;
