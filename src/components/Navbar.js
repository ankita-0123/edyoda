import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <span className="brand-text" style={{color: 'blue'}}>EDYODA</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown title="Courses" id="basic-nav-dropdown">
          <NavDropdown.Item href="#courses">Course 1</NavDropdown.Item>
          <NavDropdown.Item href="#courses">Course 2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#courses">All Courses</NavDropdown.Item>
        </NavDropdown>
        <Nav>
          <NavDropdown title="Programs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#programs">Program 1</NavDropdown.Item>
            <NavDropdown.Item href="#programs">Program 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#programs">All Programs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="outline-primary" style={{ marginLeft: "800px" }}>
            <BsSearch />
          </Button>
        </Form>
        {/* <Button variant="link" as={Link} to="/login">
          Login
        </Button> */}
        <Button variant="secondary" style={{marginLeft: '10px'}}>Login</Button>
        <Button variant="primary" style={{marginLeft: '10px'}}>Join now</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;