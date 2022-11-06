import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Card, Image, Breadcrumb } from "react-bootstrap";


const Checkout = () => {

    return (
        <>
            <Container className="py-5">
                <h1>DICK MOBA</h1>
                <Breadcrumb className="pb-3">
                    <Breadcrumb.Item href="/">Cart</Breadcrumb.Item>
                    <Breadcrumb.Item active className="text-dark">Information</Breadcrumb.Item>
                    <Breadcrumb.Item active>Shippping</Breadcrumb.Item>
                    <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col md={7}>
                        <Form>
                            <Form.Group className="mb-3 pb-4" controlId="formBasicEmail">
                                <Form.Label className="pb-3">Contact information</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                                <Form.Check type="checkbox" label="Email me with news and offers" />
                                {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="pb-3">Shipping Address</Form.Label>
                                <Form.Select>
                                    <option>select</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="Firstname" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Lastname" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" className="mb-3" placeholder="Company (optional)" />
                                <Form.Control type="text" className="mb-3" placeholder="Address" />
                                <Form.Control type="text" className="mb-3" placeholder="Apartment, suite, etc. (optional)" />
                                <Row>
                                    <Col>
                                        <Form.Control type="text" className="mb-3" placeholder="City" />
                                    </Col>
                                    <Col>
                                        <Form.Select>
                                            <option>select</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" className="mb-3" placeholder="Postal Code" />
                                    </Col>
                                </Row>
                                <Form.Control type="text" className="mb-3" placeholder="Phone (optional)" />
                                <Form.Check type="checkbox" label="Save this information for next time" />
                            </Form.Group>
                        </Form>
                        <Row>
                            <div className="flex justify-between">
                                <Col>
                                    <a>
                                        <span className="icon is-small is-left">
                                            <i class="fa-solid fa-chevron-left has-text-info"></i>
                                        </span>

                                        <span className="is-right has-text-info">Return to cart</span>
                                    </a>
                                </Col>
                                <Col className="pb-5">
                                    <div className="pb-5">
                                        <Button variant="primary" type="submit" style={{ float: "right" }}>
                                            Continue to Shipping
                                        </Button>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>


                    <Col md={5} className="border-start">
                        <Row className="mb-2">
                            <Col sm={2} md={4} className="pr-0">
                                <div className="rounded product-thumbnail" style={{ width: '100px', height: '100px',}}>
                                    <Image className="img-fluid py-3" variant="top" src="https://cdn.shopify.com/s/files/1/0289/3692/products/S-AGP121_2_850ae78b-1f49-4f62-baca-2c1cc395d2c6.jpg?v=1664887088&width=550" />
                                </div>
                            </Col>
                            <Col sm={5} md={4} >
                                <h6 className="float-start">
                                    Honolulu - Soft Pink
                                </h6>
                            </Col>
                            <Col sm={5} md={4}>
                                <h6 className="float-end">
                                    €235,00
                                </h6>
                            </Col>


                        </Row>
                        <hr></hr>
                        <Row>
                            <Col sm={6} md={10} className="pr-0">
                                <Form>
                                    <Form.Group >
                                        <Form.Control type="text" className="mb-2" placeholder="Gift card or discount code" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col sm={6} md={2} className="pl-0">
                                <Button variant="primary" type="submit">
                                    Apply
                                </Button>
                            </Col>
                        </Row>
                        <hr></hr>
                   
                            <Row>
                                <Col>
                                    <h6 className="float-start">
                                        Subtotal
                                    </h6>
                                </Col>
                                <Col>
                                    <h6 className="float-end">
                                        €235,00
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 className="float-start">
                                        Shipping
                                    </h6>
                                </Col>
                                <Col>
                                    <h6 className="float-end">
                                        Calculated at next step
                                    </h6>
                                </Col>
                            </Row>

                        <hr></hr>
                        <Row>
                            <Col>
                                <h6 className="float-start">
                                    Total
                                </h6>
                            </Col>
                            <Col>
                                <h6 className="float-end">
                                    EUR € 235,00
                                </h6>
                            </Col>
                        </Row>


                    </Col>

                </Row>
            </Container>
        </>

    );

};
export default Checkout;
