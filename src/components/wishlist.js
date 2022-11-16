import React, { useEffect, useMemo, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Form,
  Button,
  Card,
  Image,
  Breadcrumb,
  Carousel,
  Dropdown,
  Modal,
} from "react-bootstrap";
import rawItem from "../assets/Headphone.json";
import { useAuth } from "../contexts/AuthContext";
import Navbarcomponent from "./navbar";

const Wishlist = () => {
  const { favproduct } = useAuth();
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([...favproduct]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearWishlist = () => {
    setItems([]);
    localStorage.removeItem("favoriteproduct");
  };
  useEffect(() => {
    setItems([...favproduct]);
  }, [favproduct]);

  const handleCheck = (event) => {
    var updatedList = [...selected];
    var item = event.target.getAttribute("item_id");
    if (event.target.checked) {
      updatedList = [...selected, parseInt(item)];
      setCount(count + 1);
    } else {
      updatedList.splice(selected.indexOf(item), 1);
      setCount(count - 1);
    }
    setSelected(updatedList);
  };

  const subTotalPrice = useMemo(() => {
    // TODO: Calculate subtotal price
    let price = 0;
    selected.forEach((item_id) => {
      const item = items.find((e) => e.id === item_id);
      price += item.price;
    });
    return price;
  }, [selected]);

  const result = [...new Set(items.map((a) => JSON.stringify(a)))].map((a) =>
    JSON.parse(a)
  );

  return (
    <>
      <Navbarcomponent />
      <Container className="pb-5 pt-3">
        <div className="justify-content-between pt-4 pb-2">
          <Row>
            <Col md={6}>
              <h1 className="text-topic">My Wishlist</h1>
            </Col>
            <Col md={6}>
              <Dropdown style={{ float: "right" }}>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="menu"
                >
                  <span className="icon is-small">
                    <i className="fa-solid fa-xl fa-ellipsis-vertical"></i>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="text-danger" onClick={handleShow}>
                    <i className="fa-regular fa-trash-can"></i>{" "}
                    <span className="text-small">Clear List</span>
                  </Dropdown.Item>
                </Dropdown.Menu>

                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Title className="text-medium text-center px-5 pt-5">
                    Are you sure?
                  </Modal.Title>
                  <Modal.Body className="text-small text-center">
                    Do you want to remove all products from My Wishlist?
                  </Modal.Body>
                  <Modal.Body className="px-5 pb-5">
                    <Row className="py-3">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          clearWishlist();
                          handleClose();
                        }}
                        className="rounded-0 text-uppercase"
                      >
                        Yes, remove the items in my list
                      </Button>
                    </Row>
                    <Row>
                      <Button
                        variant="light"
                        onClick={handleClose}
                        className="button rounded-0 border border-secondary text-uppercase"
                      >
                        No, I changed my mind
                      </Button>
                    </Row>
                  </Modal.Body>
                </Modal>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <hr className="pt-2"></hr>
        <Row className="px-4">
          {result.map((item, index) => {
            return (
              <Col sm={6} md={4} key={index}>
                <Card className="border-0">
                  <Carousel>
                    {item.product_options.map((color) => {
                      return color.image_name.map((e) => {
                        // console.log(e);
                        return (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={`/image/${e}`}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      });
                    })}
                  </Carousel>

                  <Card.Body>
                    <Row>
                      <Col md={2} className="px-0 text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          item_id={item.id}
                          style={{ width: "30px", height: "30px" }}
                          onChange={handleCheck}
                        />
                      </Col>
                      <Col md={10} className="pb-3">
                        <h3 className="pb-2 text-medium">{item.name}</h3>
                        <h5>
                          <span className="is-right has-text-info text-small">
                            {item.price.toLocaleString("th-TH", {
                              style: "currency",
                              currency: "THB",
                            })}
                          </span>
                        </h5>
                        <Row className="pt-2">
                          <Link
                            to={{
                              pathname: "/cart",
                              state: { selected },
                            }}
                          >
                            <Button
                              type="submit"
                              className="rounded-pill btn-lg text-topic"
                              style={{
                                backgroundColor: "#00b495",
                                borderColor: "#00b495",
                              }}
                            >
                              Add to cart
                            </Button>
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <div className="text-end fixed-bottom px-5 py-3 bg-light">
            <h4 className="d-inline px-4 text-medium">
              Selected {count} Products
            </h4>
            <h4 className="d-inline text-medium">
              Subtotal{" "}
              {subTotalPrice.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}
            </h4>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Wishlist;
