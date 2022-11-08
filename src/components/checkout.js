import React, { useEffect, useState, useMemo } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Card, Image, Breadcrumb, Carousel } from "react-bootstrap";
import rawItem from '../assets/Inear.json';


const Checkout = () => {
    const [items, setItems] = useState([...rawItem])
    const [btnColor, setBtnColor] = useState(false);
    const [textGift, setTextGift] = useState('');



    // useEffect(() => {
    //     let ff = document.getElementById('giftCode')
    //     if (ff != null) {
    //         console.log(textGift);
    //         setBtnColor(true)
            
    //     } else {
    //         console.log(1);
    //         setBtnColor(false)
    //     }

    // }, [textGift, btnColor])

    const handleText =(event) => {
        setTextGift(event.target.value);
        setBtnColor(true)
    };

    const subTotalPrice = useMemo(() => {
        let sum = 0
        items.forEach((item, i) => {
            sum += item.price
        })
        return sum
    }, [items])


    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col md={7} className="px-5 py-3">
                        <h1 className="text-topic ">DICK MOBA</h1>
                        <Breadcrumb className="pb-3 text-mini">
                            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                            <Breadcrumb.Item active className="text-dark">Information</Breadcrumb.Item>
                            <Breadcrumb.Item active>Shippping</Breadcrumb.Item>
                            <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form>
                            <Form.Group className="mb-3 pb-4" controlId="formBasicEmail">
                                <Form.Label className="pb-2 text-small">Contact information</Form.Label>
                                <Form.Control type="email" className="checkout" placeholder="Email" />
                                <Form.Check type="checkbox" className="text-mini pt-1" label="Email me with news and offers" />
                                {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="pb-2 text-small">Shipping Address</Form.Label>
                                <Form.Select className="checkout">
                                    <option>select</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Row className="g-2">
                                    <Col>
                                        <Form.Control className="checkout" type="text" placeholder="Firstname" />
                                    </Col>
                                    <Col>
                                        <Form.Control className="checkout" type="text" placeholder="Lastname" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" className="mb-3 checkout" placeholder="Company (optional)" />
                                <Form.Control type="text" className="mb-3 checkout" placeholder="Address" />
                                <Form.Control type="text" className="mb-3 checkout" placeholder="Apartment, suite, etc. (optional)" />
                                <Row className="g-3">
                                    <Col>
                                        <Form.Control type="text" className="mb-3 checkout" placeholder="City" />
                                    </Col>
                                    <Col>
                                        <Form.Select className="checkout">
                                            <option>select</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" className="mb-3 checkout" placeholder="Postal Code" />
                                    </Col>
                                </Row>
                                <Form.Control type="text" className="mb-2 checkout" placeholder="Phone (optional)" />
                                <Form.Check type="checkbox" className="text-mini " label="Save this information for next time" />
                            </Form.Group>
                        </Form>
                        <Row className="pt-5">
                            <div className="flex justify-between colorCheckout">
                                <Row>
                                    <Col>
                                        <Link to="/cart" className="linkCheckout">
                                            <span className="icon is-small">
                                                <i className="fa-solid fa-chevron-left has-text-info"></i>
                                            </span>
                                            <span className="px-2 text-small">Return to cart</span>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <div>
                                            <Button className="colorBtnCheckout btn-lg" type="submit" style={{ float: "right" }}>
                                                Continue to shipping
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Col>


                    <Col md={5} className="border-start px-5 py-3">
                        {items.map((item) => {
                            return <Row className="mb-2" key={item.id}>
                                <Col sm={2} md={4} className="pr-0">
                                    <Carousel>
                                        {item.product_options.map((color) => {
                                            return color.image_name.map((e) => {
                                                // console.log(e);
                                                return <Carousel.Item>
                                                    <img
                                                        className="d-block w-75 mx-auto d-block border rounded"
                                                        src={`/image/${e}`}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                            })
                                        }
                                        )}
                                    </Carousel>
                                </Col>

                                <Col sm={5} md={4} >
                                    <h6 className="float-start text-small">
                                        {item.name}
                                    </h6>
                                </Col>
                                <Col sm={5} md={4}>
                                    <h6 className="float-end text-small">
                                        {item.price.toLocaleString('th-TH', {
                                            style: 'currency',
                                            currency: 'THB'
                                        })}
                                    </h6>
                                </Col>
                            </Row>
                        })}
                        <hr></hr>
                        <Row>
                            <Col sm={6} md={10} className="pr-0">
                                <Form>
                                    <Form.Group >
                                        <Form.Control type="text" className="mb-2 checkout" placeholder="Gift card or discount code" id="giftCode" onChange={handleText}/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col sm={6} md={2} className="pl-0">
                                <Button  type="submit" 
                                className="colorBtnApply"
                                style={{ backgroundColor: btnColor === true? "#1878b9" : "black" }}>
                                    Apply
                                </Button>
                            </Col>
                        </Row>
                        <hr></hr>

                        <Row>
                            <Col>
                                <h6 className="float-start text-small fw-normal">
                                    Subtotal
                                </h6>
                            </Col>
                            <Col>
                                <h6 className="float-end text-small fw-semibold">
                                    {subTotalPrice.toLocaleString('th-TH', {
                                        style: 'currency',
                                        currency: 'THB'
                                    })}
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6 className="float-start text-small fw-normal">
                                    Shipping
                                </h6>
                            </Col>
                            <Col>
                                <h6 className="float-end text-small fw-normal">
                                    Calculated at next step
                                </h6>
                            </Col>
                        </Row>

                        <hr></hr>
                        <Row>
                            <Col>
                                <h6 className="float-start text-small fw-normal">
                                    Total
                                </h6>
                            </Col>
                            <Col>
                                <div className="float-end">
                                    <span className="text-small fw-normal">Baht</span>{" "}
                                    <span className="text-medium fw-semibold">
                                        {subTotalPrice.toLocaleString('th-TH', {
                                            style: 'currency',
                                            currency: 'THB'
                                        })}
                                    </span>
                                </div>
                            </Col>
                        </Row>


                    </Col>

                </Row>
            </Container>
        </>

    );

};
export default Checkout;
