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
        <table class="table">
          <td>
            <h2>Metal</h2>
            <span>
              Metal is one of the primary resources. It is used for many things,
              including storage upgrades, machinery and most things in space.
            </span>
            <br></br>
            <span id="metal">Metal: {this.state.metal}</span>
            <Button
              variant="outline-dark"
              size="sm"
              className="m-2"
              onClick={this.gainMetal}
            >
              Gain 1
            </Button>
          </td>
        </table>
      </div>
    );
  }
}

export default Metal;
