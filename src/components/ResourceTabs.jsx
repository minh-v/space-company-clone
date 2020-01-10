import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Metal from "./Metal";
import MetalPane from "./MetalPane";
import Gems from "./Gems";
import GemsPane from "./GemsPane";
import Wood from "./Wood";
import WoodPane from "./WoodPane";

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
              <Metal
                metal={this.props.metal}
                metalps={this.props.metalps}
                maxMetal={this.props.maxMetal}
              />
              <Gems
                gems={this.props.gems}
                gemsps={this.props.gemsps}
                maxGems={this.props.maxGems}
              />
              <Wood
                wood={this.props.wood}
                woodps={this.props.woodps}
                maxWood={this.props.maxWood}
              />
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <MetalPane
                metal={this.props.metal}
                wood={this.props.wood}
                gainMetal={this.props.gainMetal}
                getMiner={this.props.getMiner}
                miner={this.props.miner}
                minerMetalCost={this.props.minerMetalCost}
                minerWoodCost={this.props.minerWoodCost}
              />
              <GemsPane
                gems={this.props.gems}
                metal={this.props.metal}
                gainGems={this.props.gainGems}
                getGemMiner={this.props.getGemMiner}
                gemMiner={this.props.gemMiner}
                gemMinerMetalCost={this.props.gemMinerMetalCost}
                gemMinerGemsCost={this.props.gemMinerGemsCost}
              />
              <WoodPane
                wood={this.props.wood}
                metal={this.props.metal}
                gainWood={this.props.gainWood}
                getWoodcutter={this.props.getWoodcutter}
                woodcutter={this.props.woodcutter}
                woodcutterMetalCost={this.props.woodcutterMetalCost}
                woodcutterWoodCost={this.props.woodcutterWoodCost}
              />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default ResourceTabs;
