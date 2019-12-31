import React, { Component } from "react";
import "../App.css";
import NavbarMain from "./NavbarMain";
import Navtabs from "./Navtabs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarMain />
        <Navtabs />
      </React.Fragment>
    );
  }
}

export default App;
