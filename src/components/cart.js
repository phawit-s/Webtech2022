import React, { useEffect, useState, useCallback, useMemo } from "react";
import {  useHistory, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Button,
  Carousel,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Navbarcomponent from "./navbar";

const Cart = () => {
  const { productcart, checkout, gotodetail } = useAuth();
  const history = useHistory();
  const [items, setItems] = useState([...productcart]);
  const [itemsInCart, setItemsInCart] = useState([...items.map((_) => 1)]);

  useEffect(() => {
    setItems([...productcart]);
  }, [productcart]);
  const result = [...new Set(items.map((a) => JSON.stringify(a)))].map((a) =>
    JSON.parse(a)
  );

  const checktopay = () => {
    checkout(result);
    window.localStorage.setItem("checkoutprice", subTotalPrice);
    history.push({
      pathname: `/checkout`,
    });
  };
  
  const increaseItemToCart = useCallback(
    (index) => {
      const updatedCarts = [...itemsInCart];
      if (updatedCarts[index] < 100) updatedCarts[index] += 1;
      setItemsInCart(updatedCarts);
    },
    [itemsInCart]
  );

  const decreaseItemToCart = useCallback(
    (index) => {
      const updatedCarts = [...itemsInCart];
      if (updatedCarts[index] > 0) updatedCarts[index] -= 1;
      if (updatedCarts[index] === 0) {
        const updateCartItems = [...items];
        updateCartItems.splice(index, 1); // ลบออกจากรายการข้อมูล
        updatedCarts.splice(index, 1); // ลบออกจากรายการจำนวนในตะกร้า
        window.localStorage.setItem(
          "productcart",
          JSON.stringify(updateCartItems)
        );
        setItems(updateCartItems);
      }
      setItemsInCart(updatedCarts);
    },
    [itemsInCart, items]
  );

  const subTotalPrice = useMemo(() => {
    let sum = 0;
    items.forEach((item, i) => {
      sum += item.price * itemsInCart[i];
    });
    return sum;
  }, [itemsInCart, items]);

  const changepage = (index) => {
    gotodetail(result[index]);
    history.push({
      pathname: "/description",
    });
  };
  return (
    <>
      <Navbarcomponent />
      <Container className="pb-5">
        <div className="justify-content-between py-5">
          <Row>
            <Col>
              <h1 className="text-topic">Your cart</h1>
            </Col>
            <Col className="pt-2">
              <Link to="/" className="cartCheckout">
                <button
                  style={{ float: "right" }}
                  type="button"
                  className="btn btn-outline-dark rounded-pill btnContinueShop "
                >
                  Continue Shopping
                </button>
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="text-secondary">
          <Col md={6}>
            <h6 className="text-mini">PRODUCT</h6>
          </Col>
          <Col md={3}>
            <h6 className="text-mini text-center">QUANTITY</h6>
          </Col>
          <Col md={3}>
            <h6 className="text-mini" style={{ float: "right" }}>
              TOTAL
            </h6>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          {items.map((item, i) => {
            return (
              <>
                <Col md={6} className="py-3" key={item.id}>
                  <Row>
                    <Col md={4}>
                      <Carousel>
                        {item.product_options.map((color) => {
                          return color.image_name.map((e) => {
                            return (
                              <Carousel.Item
                                key={`${item.id}-${color.name}-${e}`}
                              >
                                <img
                                  className="d-block w-50 mx-auto d-block"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => changepage(i)}
                                  src={`/image/${e}`}
                                  alt="First slide"
                                />
                              </Carousel.Item>
                            );
                          });
                        })}
                      </Carousel>
                    </Col>
                    <Col
                      md={8}
                      style={{ cursor: "pointer" }}
                      onClick={() => changepage(i)}
                    >
                      <h5 className="text-small">{item.name}</h5>
                      <h6 className="text-small">
                        {item.price.toLocaleString("th-TH", {
                          style: "currency",
                          currency: "THB",
                        })}
                      </h6>
                    </Col>
                  </Row>
                </Col>
                <Col md={3} className="py-3 text-center">
                  <div>
                    <div
                      className="btn-group d-inline"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="border border-dark border-end-0 rounded-0 btn btn-lg btn-link text-center text-dark"
                        style={{ textDecoration: "none" }}
                        onClick={() => decreaseItemToCart(i)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className="border border-dark border-start-0 border-end-0 btn btn-lg btn-link text-center text-dark"
                        style={{ textDecoration: "none" }}
                      >
                        {itemsInCart[i]}
                      </button>
                      <button
                        type="button"
                        className="border border-start-0 border-dark rounded-0 btn btn-lg btn-link text-center text-dark"
                        style={{ textDecoration: "none" }}
                        onClick={() => increaseItemToCart(i)}
                      >
                        +
                      </button>
                    </div>
                    <div className="d-inline px-3">
                      <button
                        type="button"
                        className="border border-0 btn"
                        onClick={() => {
                          // TODO: Delete data at index `index`
                          const updatedCartItems = [...items];
                          updatedCartItems.splice(i, 1);
                          setItems(updatedCartItems);
                          window.localStorage.setItem(
                            "productcart",
                            JSON.stringify(updatedCartItems)
                          );
                        }}
                      >
                        <span className="icon is-small">
                          <i className="fa-regular fa-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </Col>
                <Col md={3} className="py-3">
                  <h5 className="text-small" style={{ float: "right" }}>
                    {(item.price * itemsInCart[i]).toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}
                  </h5>
                </Col>
                <hr></hr>
              </>
            );
          })}
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <div className="text-end pt-5">
                <h4 className="text-medium pb-2">
                  Subtotal{" "}
                  {subTotalPrice.toLocaleString("th-TH", {
                    style: "currency",
                    currency: "THB",
                  })}{" "}
                  THB
                </h4>
                <h4 className="text-small fw-light">
                  Tax included and shipping calculated at
                </h4>
                <h4 className="text-small fw-light pb-2">checkout</h4>
                <Row>
                  <Button
                    type="submit"
                    onClick={() => checktopay()}
                    href="/checkout"
                    className="rounded-pill btn-lg text-topic"
                    style={{
                      backgroundColor: "#16193a",
                      borderColor: "#16193a",
                    }}
                  >
                    Checkout
                  </Button>
                </Row>
                {/* <Row className="pt-2">
                                    <Button type="submit" href="/checkout" className="rounded-0 btn-lg text-topic" style={{ backgroundColor: '#ffc439', borderColor: '#ffc439' }}>
                                        
                                        Checkout
                                        </Button>
                                </Row> */}
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
