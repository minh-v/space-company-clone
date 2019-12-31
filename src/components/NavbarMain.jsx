import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

class navbarMain extends Component {
  render() {
    return (
      <Container className="pb-5">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" id="Navbar">
            Space Company
          </Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default navbarMain;
