import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class GemsPane extends Component {
  render() {
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Gems">
          <div>
            <h2 class="text-primary">Gems</h2>
            <span>
              Gems are one of the primary resources. They are used for advanced
              machines and for powerful tools and components. They are more
              useful in later game.
            </span>
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.gainGems}
            >
              Gain 1
            </Button>
            <br></br>
            <h3 class="text-primary">
              Gem Miner: <span id="gemMiner">{this.props.gemMiner}</span>
            </h3>
            Build an improved pickaxe to mine Gems.
            <br></br>
            Produces 1 Gem per second.
            <br></br>
            Costs{" "}
            <span id="gemMinerMetalCost">
              {this.props.gemMinerMetalCost}
            </span>{" "}
            Metal,{" "}
            <span id="gemMinerGemsCost">{this.props.gemMinerGemsCost}</span>{" "}
            Gems.
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.getGemMiner}
            >
              Get Gem Miner
            </Button>
          </div>
        </Tab.Pane>
      </Tab.Content>
    );
  }
}

export default GemsPane;
