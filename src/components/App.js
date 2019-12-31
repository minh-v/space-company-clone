import React, { Component } from "react";
import "../App.css";
<<<<<<< HEAD
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
=======
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return <Navbar />;
>>>>>>> e694cf81777738f07b3da7def9d706ec6c3bb4c5
  }
}

export default App;
