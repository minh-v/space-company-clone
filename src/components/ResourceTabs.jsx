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
  state = {
    metal: 0,
    metalps: 0,
    maxMetal: 50,
    minerMetalCost: 10,
    minerWoodCost: 5,
    miner: 0,
    gems: 0,
    gemsps: 0,
    maxGems: 50,
    gemMinerMetalCost: 15,
    gemMinerGemsCost: 10,
    gemMiner: 0,
    wood: 0,
    woodps: 0,
    maxWood: 50,
    woodcutterMetalCost: 10,
    woodcutterWoodCost: 5,
    woodcutter: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.maxMetal >= this.state.metal + this.state.metalps)
        this.setState({
          metal: this.state.metal + this.state.metalps
        });
      if (this.state.maxWood >= this.state.wood + this.state.woodps)
        this.setState({
          wood: this.state.wood + this.state.woodps
        });
      if (this.state.maxGems >= this.state.gems + this.state.gemsps)
        this.setState({
          gems: this.state.gems + this.state.gemsps
        });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  gainMetal = () => {
    if (this.state.metal < this.state.maxMetal) {
      this.setState(state => {
        return { metal: state.metal + 1 };
      });
    }
  };

  getMiner = () => {
    if (
      // if has required materials
      this.state.wood >= this.state.minerWoodCost &&
      this.state.metal >= this.state.minerMetalCost
    ) {
      this.setState(state => {
        return {
          metal: this.state.metal - this.state.minerMetalCost,
          wood: this.state.wood - this.state.minerWoodCost,
          miner: this.state.miner + 1,
          metalps: this.state.metalps + 1,
          minerMetalCost: Math.round(this.state.minerMetalCost * 1.1),
          minerWoodCost: Math.round(this.state.minerWoodCost * 1.1)
        };
      });
      if (this.state.miner === 0) {
        this.props.enableResearchTab();
      }
    }
  };

  gainGems = () => {
    if (this.state.gems < this.state.maxGems) {
      this.setState(state => {
        return { gems: state.gems + 1 };
      });
    }
  };

  getGemMiner = () => {
    if (
      // if has required materials
      this.state.metal >= this.state.gemMinerMetalCost &&
      this.state.gems >= this.state.gemMinerGemsCost
    ) {
      this.setState(state => {
        return {
          metal: this.state.metal - this.state.gemMinerMetalCost,
          gems: this.state.gems - this.state.gemMinerGemsCost,
          gemMiner: this.state.gemMiner + 1,
          gemsps: this.state.gemsps + 1,
          gemMinerMetalCost: Math.round(this.state.gemMinerMetalCost * 1.1),
          gemMinerGemsCost: Math.round(this.state.gemMinerGemsCost * 1.1)
        };
      });
    }
  };

  gainWood = () => {
    if (this.state.wood < this.state.maxWood) {
      this.setState(state => {
        return { wood: this.state.wood + 1 };
      });
    }
  };

  getWoodcutter = () => {
    if (
      // if has required materials
      this.state.wood >= this.state.woodcutterWoodCost &&
      this.state.metal >= this.state.woodcutterMetalCost
    )
      this.setState(state => {
        return {
          wood: this.state.wood - this.state.woodcutterWoodCost,
          metal: this.state.metal - this.state.woodcutterMetalCost,
          woodcutter: this.state.woodcutter + 1,
          woodps: this.state.woodps + 1,
          woodcutterMetalCost: Math.round(this.state.woodcutterMetalCost * 1.1),
          woodcutterWoodCost: Math.round(this.state.woodcutterWoodCost * 1.1)
        };
      });
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
              <Metal
                metal={this.state.metal}
                metalps={this.state.metalps}
                maxMetal={this.state.maxMetal}
              />
              <Gems
                gems={this.state.gems}
                gemsps={this.state.gemsps}
                maxGems={this.state.maxGems}
              />
              <Wood
                wood={this.state.wood}
                woodps={this.state.woodps}
                maxWood={this.state.maxWood}
              />
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <MetalPane
                metal={this.state.metal}
                wood={this.state.wood}
                gainMetal={this.gainMetal}
                getMiner={this.getMiner}
                miner={this.state.miner}
                minerMetalCost={this.state.minerMetalCost}
                minerWoodCost={this.state.minerWoodCost}
              />
              <GemsPane
                gems={this.state.gems}
                metal={this.state.metal}
                gainGems={this.gainGems}
                getGemMiner={this.getGemMiner}
                gemMiner={this.state.gemMiner}
                gemMinerMetalCost={this.state.gemMinerMetalCost}
                gemMinerGemsCost={this.state.gemMinerGemsCost}
              />
              <WoodPane
                wood={this.state.wood}
                metal={this.state.metal}
                gainWood={this.gainWood}
                getWoodcutter={this.getWoodcutter}
                woodcutter={this.state.woodcutter}
                woodcutterMetalCost={this.state.woodcutterMetalCost}
                woodcutterWoodCost={this.state.woodcutterWoodCost}
              />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default ResourceTabs;
