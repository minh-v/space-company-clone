import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ResourceTabs from "./ResourceTabs";
import ResearchTabs from "./ResearchTabs";

class Navtabs extends Component {
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
    woodcutter: 0,
    researchTabEnabled: false,
    storageUpgradeEnabled: false
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.maxMetal <= this.state.metal + this.state.metalps)
        this.setState({
          metal: this.state.maxMetal
        });
      else if (this.state.maxMetal > this.state.metal + this.state.metalps) {
        this.setState({
          metal: this.state.metal + this.state.metalps
        });
      }
      if (this.state.maxWood <= this.state.wood + this.state.woodps)
        this.setState({
          wood: this.state.maxWood
        });
      else if (this.state.maxWood > this.state.wood + this.state.woodps) {
        this.setState({
          wood: this.state.wood + this.state.woodps
        });
      }
      if (this.state.maxGems <= this.state.gems + this.state.gemsps)
        this.setState({
          gems: this.state.maxGems
        });
      else if (this.state.maxGems > this.state.gems + this.state.gemsps) {
        this.setState({
          gems: this.state.gems + this.state.gemsps
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  purchase = (metalCost, gemsCost, woodCost) => {
    this.setState(state => {
      return {
        metal: this.state.metal - metalCost,
        gems: this.state.gems - gemsCost,
        wood: this.state.wood - woodCost
      };
    });
  };

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
        this.enableResearchTab();
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

  enableResearchTab = () => {
    // toggle research tab
    this.setState({
      researchTabEnabled: true
    });
  };

  enableStorageUpgrade = () => {
    this.setState({
      storageUpgradeEnabled: true
    });
  };

  upgradeMetalStorage = () => {
    if (this.state.metal === this.state.maxMetal) {
      this.setState({
        metal: 0,
        maxMetal: this.state.maxMetal * 2
      });
    }
  };

  upgradeGemsStorage = () => {
    if (this.state.gems === this.state.maxGems) {
      this.setState({
        gems: 0,
        maxGems: this.state.maxGems * 2
      });
    }
  };

  upgradeWoodStorage = () => {
    if (this.state.wood === this.state.maxWood) {
      this.setState({
        wood: 0,
        maxWood: this.state.maxWood * 2
      });
    }
  };

  render() {
    return (
      <div class="container">
        <Tabs defaultActiveKey="Resources" id="Navtabs">
          <Tab eventKey="Resources" title="Resources">
            <ResourceTabs
              metal={this.state.metal}
              metalps={this.state.metalps}
              maxMetal={this.state.maxMetal}
              gems={this.state.gems}
              gemsps={this.state.gemsps}
              maxGems={this.state.maxGems}
              wood={this.state.wood}
              woodps={this.state.woodps}
              maxWood={this.state.maxWood}
              gainMetal={this.gainMetal}
              getMiner={this.getMiner}
              miner={this.state.miner}
              minerMetalCost={this.state.minerMetalCost}
              minerWoodCost={this.state.minerWoodCost}
              gainGems={this.gainGems}
              getGemMiner={this.getGemMiner}
              gemMiner={this.state.gemMiner}
              gemMinerMetalCost={this.state.gemMinerMetalCost}
              gemMinerGemsCost={this.state.gemMinerGemsCost}
              gainWood={this.gainWood}
              getWoodcutter={this.getWoodcutter}
              woodcutter={this.state.woodcutter}
              woodcutterMetalCost={this.state.woodcutterMetalCost}
              woodcutterWoodCost={this.state.woodcutterWoodCost}
              storageUpgradeEnabled={this.state.storageUpgradeEnabled}
              upgradeMetalStorage={this.upgradeMetalStorage}
              upgradeGemsStorage={this.upgradeGemsStorage}
              upgradeWoodStorage={this.upgradeWoodStorage}
            />
          </Tab>
          <Tab
            eventKey="Research"
            title="Research"
            tabClassName={this.state.researchTabEnabled ? "" : "d-none"}
          >
            <ResearchTabs
              metal={this.state.metal}
              gems={this.state.gems}
              wood={this.state.wood}
              purchase={this.purchase}
              enableStorageUpgrade={this.enableStorageUpgrade}
              storageUpgradeEnabled={this.state.storageUpgradeEnabled}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Navtabs;
