import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../app.css";

const NavBar: React.FC = () => {
  return (
    <Navbar
      bg="unifor"
      expand="lg"
      fixed="top"
      className="navbar-unifor"
      style={{
        backgroundColor: "#005CA9",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          Espaço Cultural Yolanda e Edson Queiroz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/exibições">Exibições</Nav.Link>
            <Nav.Link href="/eventos">Eventos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
