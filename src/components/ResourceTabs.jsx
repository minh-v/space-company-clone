import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Metal from "./Metal";
import MetalPane from "./MetalPane";
import Nav from "react-bootstrap/Nav";
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
    wood: 0,
    woodps: 0,
    maxWood: 50,
    woodcutterMetalCost: 10,
    woodcutterWoodCost: 5,
    woodcutter: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        metal: this.state.metal + this.state.metalps,
        wood: this.state.wood + this.state.woodps
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
    )
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
              <Nav.Item>
                <Nav.Link eventKey="Gems">Gems</Nav.Link>
              </Nav.Item>
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
              <Tab.Pane eventKey="Gems">Gemz</Tab.Pane>
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
