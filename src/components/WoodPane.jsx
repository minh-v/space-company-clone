import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class WoodPane extends Component {
  render() {
    const nextUpgrade = this.props.maxWood * 2;
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Wood">
          <div>
            <h2 class="text-primary">Wood</h2>
            <span>
              Wood is one of the primary resources. It is used more often in
              early game for tools and buildings.
            </span>
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.gainWood}
            >
              Gain 1
            </Button>
            <br></br>
            {this.props.storageUpgradeEnabled ? (
              <div>
                <h3 class="text-primary">Storage Upgrade</h3>
                <span>Upgrade your Wood storage size to {nextUpgrade}.</span>
                <br></br>
                Costs <span>{this.props.maxWood}</span> Wood.
                <br></br>
                <Button
                  size="sm"
                  className="m-2"
                  type="button"
                  class="btn btn-secondary"
                  onClick={this.props.upgradeWoodStorage}
                >
                  Upgrade Storage
                </Button>
              </div>
            ) : null}
            <h3 class="text-primary">
              Woodcutter: <span id="Woodcutter">{this.props.woodcutter}</span>
            </h3>
            Build an axe for your woodcutter.
            <br></br>
            Produces 1 wood per second.
            <br></br>
            Costs{" "}
            <span id="woodcutterMetalCost">
              {this.props.woodcutterMetalCost}
            </span>{" "}
            Metal,{" "}
            <span id="woodcutterWoodCost">{this.props.woodcutterWoodCost}</span>{" "}
            Wood.
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.getWoodcutter}
            >
              Get Woodcutter
            </Button>
          </div>
        </Tab.Pane>
      </Tab.Content>
    );
  }
}

export default WoodPane;
