

import React, { useEffect, useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Card, Image, Breadcrumb } from "react-bootstrap";

const Cart = () => {

    const data = [
        {
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 14490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        },
        {
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 15490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        },
        {
            "name": "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
            "price": 16490.00,
            "stock": 10,
            "image": "https://cdn.shopify.com/s/files/1/0289/3692/products/S-PRT123_1_bdd5fc4d-9372-47e2-99c4-c3f6067c5b63.jpg?v=1664887154"
        }
    ]
    
    const increaseItemToCart = useCallback((item) => {})

    const decreaseItemToCart = useCallback((item) => {})



    return (
        <>
            <Container>
                <div className="justify-content-between py-4">
                    <Row >
                        <Col>
                            <h1>Your Cart</h1>
                        </Col>
                        <Col className="pt-3">
                            <button style={{ float: 'right' }} type="button" className="btn btn-outline-dark rounded-pill" >Continue Shopping</button>
                        </Col>
                    </Row>
                </div>
                <Row>
                    {
                        data.map((item) => {
                            return <>
                                <Col md={6} className="py-3">
                                    <Row>
                                        <Col md={4}>
                                            <img src={item.image} class="img-fluid" alt="..." />
                                        </Col>
                                        <Col md={8}>
                                            <h5>{item.name}</h5>
                                            <h6>{item.price.toLocaleString('th-TH', {
                                                style: 'currency',
                                                currency: 'THB'
                                            })}</h6>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3}>
                                    <button type="button" className="btn btn-danger btn-sm text-center" onClick={() => {
                                        decreaseItemToCart(item)
                                    }}
                                    >-</button>
                                    <button type="button" className="btn btn-warning btn-sm text-center" onClick={() => {
                                        increaseItemToCart(item)
                                    }}
                                        disabled={item.stock === 1}
                                    >+</button>
                                </Col>
                                <Col md={3}>
                                </Col>
                            </>
                        })
                    }
                </Row>

            </Container>
        </>
    );
};

export default Cart;