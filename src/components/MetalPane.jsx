import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class MetalPane extends Component {
  render() {
    const nextUpgrade = this.props.maxMetal * 2;
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Metal">
          <div>
            <h2 class="text-primary">Metal</h2>
            <span>
              Metal is one of the primary resources. It is used for many things,
              including storage upgrades, machinery and most things in space.
            </span>
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.gainMetal}
            >
              Gain 1
            </Button>
            <br></br>
            {this.props.storageUpgradeEnabled ? (
              <div>
                <h3 class="text-primary">Storage Upgrade</h3>
                <span>Upgrade your Metal storage size to {nextUpgrade}.</span>
                <br></br>
                Costs <span>{this.props.maxMetal}</span> Metal.
                <br></br>
                <Button
                  size="sm"
                  className="m-2"
                  type="button"
                  class="btn btn-secondary"
                  onClick={this.props.upgradeMetalStorage}
                >
                  Upgrade Storage
                </Button>
              </div>
            ) : null}
            <h3 class="text-primary">
              Miner: <span id="Miner">{this.props.miner}</span>
            </h3>
            Build a pickaxe for your miner.
            <br></br>
            Produces 1 Metal per second.
            <br></br>
            Costs <span id="minerMetalCost">
              {this.props.minerMetalCost}
            </span>{" "}
            Metal, <span id="minerWoodCost">{this.props.minerWoodCost}</span>{" "}
            Wood.
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.getMiner}
            >
              Get Miner
            </Button>
          </div>
        </Tab.Pane>
      </Tab.Content>
    );
  }
}

export default MetalPane;
