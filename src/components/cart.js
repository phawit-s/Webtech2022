

import React, { useEffect, useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Card, Image, Breadcrumb } from "react-bootstrap";

const Cart = () => {

    const data = [
        {
            "id": 1,
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 14490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        },
        {
            "id": 2,
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 15490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        },
        {
            "id": 3,
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 16490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        }
    ]

    const [cartItems, setCartItems] = useState(data)

    const RemoveCart = () => {

    }

    const increaseItemToCart = useCallback((item) => { })

    const decreaseItemToCart = useCallback((item) => { })



    return (
        <>
            <Container>
                <div className="justify-content-between py-4">
                    <Row >
                        <Col>
                            <h1>Your cart</h1>
                        </Col>
                        <Col className="pt-3">
                            <button style={{ float: 'right' }} type="button" className="btn btn-outline-dark rounded-pill" >Continue Shopping</button>
                        </Col>
                    </Row>
                </div>
                <Row className="text-secondary">
                    <Col md={6}>
                        <h6>PRODUCT</h6>
                    </Col>
                    <Col md={3} className="text-center">
                        <h6>QUANTITY</h6>
                    </Col>
                    <Col md={3}>
                        <h6 style={{ float: 'right' }}>TOTAL</h6>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    {
                        cartItems.map((item, i) => {
                            return <>
                                <Col md={6} className="py-3" key={item.id}>
                                    <Row>
                                        <Col md={4}>
                                            <img src={item.image} class="img-fluid" alt="..." />
                                        </Col>
                                        <Col md={8}>
                                            <h5>{item.name}</h5>
                                            <h6 className="text-secondary">{item.price.toLocaleString('th-TH', {
                                                style: 'currency',
                                                currency: 'THB'
                                            })}</h6>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3} className="py-3 text-center">
                                    <div>
                                        <div class="btn-group d-inline" role="group" aria-label="Basic example">
                                            <button type="button" className="border border-dark border-end-0 rounded-0 btn btn-lg btn-link text-center text-dark " style={{ textDecoration: "none" }}>-</button>
                                            <button type="button" className="border border-dark border-start-0 border-end-0 btn btn-lg btn-link text-center text-dark" style={{ textDecoration: "none" }}>{item.stock}</button>
                                            <button type="button" className="border border-start-0 border-dark rounded-0 btn btn-lg btn-link text-center text-dark" style={{ textDecoration: "none" }}>+</button>
                                        </div>
                                        <div className="d-inline px-3">
                                            <button type="button" class="border border-0 btn" onClick={() => {
                                                // TODO: Delete data at index `index`
                                                const updatedCartItems = [...cartItems]
                                                updatedCartItems.splice(i, 1)
                                                setCartItems(updatedCartItems)
                                            }}>
                                                <span className="icon is-small">
                                                    <i class="fa-regular fa-trash-can"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} className="py-3" >
                                    <h5 style={{ float: 'right' }}>{item.price.toLocaleString('th-TH', {
                                        style: 'currency',
                                        currency: 'THB'
                                    })}</h5>
                                </Col>
                                <hr></hr>
                            </>
                        })
                    }
                </Row>

            </Container>
        </>
    );
};

export default Cart;