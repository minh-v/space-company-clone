import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class TechnologiesPane extends Component {
  render() {
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Technologies">
          <div>
            <h2 class="text-primary">Technologies</h2>
            <span>
              Research new technologies to unlock more mechanics and advance
              through the game.
            </span>
            <br></br>
            {this.props.storageUpgradeEnabled ? null : (
              <div id="storageUpgrades">
                <h3 class="text-primary">Storage Upgrades</h3>
                This will allow you to build storage upgrades to increase the
                maximum on the amount of resource you can have at once.
                <br></br>
                Costs{" "}
                <span id="storageUpgradeCost">
                  {this.props.storageUpgradeCost}
                </span>{" "}
                Science.
                <br></br>
                <Button
                  size="sm"
                  className="m-2"
                  type="button"
                  class="btn btn-secondary"
                  onClick={this.props.buyStorageUpgrade}
                >
                  Build
                </Button>
              </div>
            )}
          </div>
        </Tab.Pane>
      </Tab.Content>
    );
  }
}

export default TechnologiesPane;
