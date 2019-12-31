import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Metal extends Component {
  state = {
    metal: 0,
    maxMetal: 50
  };

  gainMetal = () => {
    if (this.state.metal < this.state.maxMetal) {
      this.setState(state => {
        return { metal: state.metal + 1 };
      });
    }
  };

  render() {
    return (
      <div>
        Metal: <span id="metal">{this.state.metal}</span>
        <Button
          variant="outline-dark"
          size="sm"
          className="m-2"
          onClick={this.gainMetal}
        >
          Gain Metal
        </Button>
      </div>
    );
  }
}

export default Metal;
