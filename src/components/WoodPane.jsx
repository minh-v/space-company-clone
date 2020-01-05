import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class WoodPane extends Component {
  render() {
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Wood">
          <div>
            <h2>Wood</h2>
            <span>
              Wood is one of the primary resources. It is used more often in
              early game for tools and buildings.
            </span>
            <br></br>
            <Button
              variant="outline-dark"
              size="sm"
              className="m-2"
              onClick={this.props.gainWood}
            >
              Gain 1
            </Button>
            <br></br>
            <h3>
              Woodcutter: <span id="Woodcutter">0</span>
            </h3>
            Build an axe for your woodcutter.
            <br></br>
            Produces 1 wood per second.
            <br></br>
            Costs <span id="woodcutterMetalCost">10</span> Metal,{" "}
            <span id="woodcutterCost">5</span> Wood.
            <br></br>
            <Button
              variant="outline-dark"
              size="sm"
              className="m-2"
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
