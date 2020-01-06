import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class MetalPane extends Component {
  render() {
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Metal">
          <div>
            <h2>Metal</h2>
            <span>
              Metal is one of the primary resources. It is used for many things,
              including storage upgrades, machinery and most things in space.
            </span>
            <br></br>
            <Button
              variant="outline-dark"
              size="sm"
              className="m-2"
              onClick={this.props.gainMetal}
            >
              Gain 1
            </Button>
            <br></br>
            <h3>
              Miner: <span id="Miner">{this.props.Miner}</span>
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
              variant="outline-dark"
              size="sm"
              className="m-2"
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
