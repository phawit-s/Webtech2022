import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbarcomponent = () => {
  const [onOpen, setOnOpen] = useState(false);
  const Dropdownnmenu = () => {
    return (
      <Navbar
        onMouseLeave={() => setOnOpen(!onOpen)}
        style={{
          height: "60px",
          backgroundColor: "#FFF",
          position: "absolute",
          color: "#000",
          boxShadow: "0px 4px 5px 0px #888888",
        }}
      >
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="/headphone" className="mx-4 mt-1">
              Headphone
            </Nav.Link>
            <Nav.Link href="/inear" className="mt-1">
              Inear
            </Nav.Link>
            <Nav.Link href="/earbud" className="mx-4 mt-1">
              Earbud
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };
  return (
    <>
      <Row>
        <Navbar
          style={{
            backgroundColor: "#FFFDF5",
            height: "60px",
            border: "1px solid black",
          }}
        >
          <Container fluid className="px-5">
            <Navbar.Brand href="/" className="mx-4">
              Home
            </Navbar.Brand>
            <Nav
              className="mx-4 mt-1"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setOnOpen(!onOpen)}
            >
              Headphone
            </Nav>
            <Nav.Link href="/speaker" className="ml-4 mt-1">
              Speaker
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>{onOpen ? <Dropdownnmenu /> : ""}</Row>
    </>
  );
};

export default Navbarcomponent;
