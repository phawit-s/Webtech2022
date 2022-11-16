import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useHistory, Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { useToasts } from "react-toast-notifications";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbarcomponent = () => {
  const history = useHistory();
  const [onOpen, setOnOpen] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [colorid, setColorid] = useState(false);
  const { currentUser } = useAuth();
  const { addToast } = useToasts();

  const logout = () =>{
    history.push({
      pathname: `/signin`,
    })
    addToast("Logout", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  const Dropdownnmenu = () => {
    return (
      <Navbar
        onMouseLeave={() => setOnOpen(!onOpen)}
        style={{
          zIndex: "1",
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
              onClick={() => setOnOpen(!onOpen)}
            >
              Headphone
              {onOpen ? (
                <IoIosArrowUp style={{ marginTop: "6px", marginLeft: "4px" }} />
              ) : (
                <IoIosArrowDown
                  style={{ marginTop: "6px", marginLeft: "4px" }}
                />
              )}
            </Nav>

            <Nav.Link href="/speaker" className="ml-5 mt-1">
              Speaker
            </Nav.Link>
            <Nav.Link href="/all" className="mx-4 mt-1">
              All Product
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <div>
                <AiOutlineHeart
                  style={{
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: `/wishlist`,
                    })
                  }
                />
                <span
                  style={{
                    color: "green",
                    position: "relative",
                    right: "8px",
                    bottom: "8px",
                    width: "10px",
                    height: "10px",
                  }}
                >
                  ●
                </span>
              </div>
              <div>
                <AiOutlineShoppingCart
                  style={{
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  className="mx-3"
                  onClick={() =>
                    history.push({
                      pathname: `/cart`,
                    })
                  }
                />
                <span
                  style={{
                    color: "green",
                    position: "relative",
                    right: "22px",
                    bottom: "8px",
                    width: "10px",
                    height: "10px",
                  }}
                >
                  ●
                </span>
              </div>
              <div>
                <Nav
                  className="mx-4 "
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggleProfile(!toggleProfile)}
                >
                  {currentUser.username}
                  {toggleProfile ? (
                    <IoIosArrowUp
                      style={{ marginTop: "6px", marginLeft: "4px" }}
                    />
                  ) : (
                    <IoIosArrowDown
                      style={{ marginTop: "6px", marginLeft: "4px" }}
                    />
                  )}
                </Nav>
                {toggleProfile ? (
                  <div
                    onMouseEnter={() => setColorid(!colorid)}
                    onMouseLeave={() => setColorid(!colorid)}
                    onClick={() => logout()}
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid gray",
                      padding: "10px",
                      marginLeft: "20px",
                      marginTop: "10px",
                      borderRadius: "5px",
                      position: "absolute",
                      zIndex: "1",
                      cursor: "pointer",
                      color: colorid ? "red" : "black",
                    }}
                  >
                    <h6>Logout</h6>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>{onOpen ? <Dropdownnmenu /> : ""}</Row>
    </>
  );
};

export default Navbarcomponent;
