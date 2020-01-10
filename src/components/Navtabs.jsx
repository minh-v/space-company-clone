import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ResourceTabs from "./ResourceTabs";
import ResearchTabs from "./ResearchTabs";

class Navtabs extends Component {
  state = {
    researchTabEnabled: false
  };

  enableResearchTab = () => {
    // toggle research tab
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
            <ResearchTabs />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Navtabs;
