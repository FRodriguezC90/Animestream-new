import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">AnimeStream</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Catalog</Nav.Link>
          <Nav.Link href="#">My Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
