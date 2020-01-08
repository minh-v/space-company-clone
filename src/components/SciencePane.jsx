import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

class SciencePane extends Component {
  render() {
    return (
      <Tab.Content>
        <Tab.Pane eventKey="Science">
          <div>
            <h2 class="text-primary">Science</h2>
            <span>
              Science is used for researching new technologies to further your
              progress in the game.
            </span>
            <br></br>
            <h3 class="text-primary">
              Home Science Kit:{" "}
              <span id="homeScienceKit">{this.props.homeScienceKit}</span>
            </h3>
            Build a small laboratory of your very own to start producing
            science.
            <br></br>
            Each one produces 0.1 science per second.
            <br></br>
            Costs <span id="hskMetalCost">{this.props.hskMetalCost}</span>{" "}
            Metal, <span id="hskGemsCost">{this.props.hskGemsCost}</span> Gems,{" "}
            <span id="hskWoodCost">{this.props.hskWoodCost}</span> Wood.
            <br></br>
            <Button
              size="sm"
              className="m-2"
              type="button"
              class="btn btn-secondary"
              onClick={this.props.buildHomeScienceKit}
            >
              Build
            </Button>
          </div>
        </Tab.Pane>
      </Tab.Content>
    );
  }
}

export default SciencePane;
