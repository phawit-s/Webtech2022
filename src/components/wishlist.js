import React, { useEffect, useMemo, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Card, Image, Breadcrumb } from "react-bootstrap";

const Wishlist = () => {
    const [selected, setSelected] = useState([]);
    const [count, setCount] = useState(0);
    const [sumCount, setSumCount] = useState([]);
    const [sumSelected, setSumSelected] = useState([]);

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



    const handleCheck = (event) => {
        var updatedList = [...selected];
        var item = event.target.getAttribute('item_id')
        if (event.target.checked) {
            updatedList = [...selected, parseInt(item)];
            setCount(count + 1)
        } else {
            updatedList.splice(selected.indexOf(item), 1);
            setCount(count - 1)
        }
        setSelected(updatedList);
        // console.log(item)
    };

    const subTotalPrice = useMemo(() => {
        // TODO: Calculate subtotal price
        let price = 0
        selected.forEach((item_id) => {
            const item = data.find(e => e.id === item_id)
            // console.log(item)
            price += item.price
            // data.forEach((item) => {
            //     if (item_id == item.id) {
            //         price += item.price
            //     }
            // })
        })
        return price
    }, [selected])


    return (
        <>
            <Container>
                <div className="justify-content-between py-4">
                    <Row>
                        <Col md={6}>
                            <h1>My Wishlist</h1>
                        </Col>
                        <Col md={6}>
                            <span className="icon is-small pt-3" style={{ float: 'right' }}>
                                <i class="fa-solid fa-2xl fa-ellipsis-vertical"></i>
                            </span>
                        </Col>
                    </Row>
                </div>
                <hr className="py-3"></hr>
                <Row className="px-4">
                    {
                        data.map((item) => {
                            return <Col sm={6} md={4} key={item.id}>
                                <Card className="border-0">
                                    <Card.Img className="rounded-0" variant="top" src={item.image} />
                                    <Card.Body>
                                        <Row>
                                            <Col md={2} className="px-0 text-center">
                                                <input class="form-check-input" type="checkbox" item_id={item.id} style={{ width: '30px', height: '30px' }}
                                                    onChange={handleCheck} />
                                            </Col>
                                            <Col md={10} className="pb-4">
                                                <Card.Title className="pb-2 fw-bold text-secondary fw-bold text-secondary">{item.name}</Card.Title>
                                                <Card.Text>
                                                    {/* <span className="icon is-small is-left">
                                                        <i class="fa-solid fa-baht-sign"></i>
                                                    </span> */}
                                                    <span className="is-right has-text-info fw-bold">{item.price.toLocaleString('th-TH', {
                                                        style: 'currency',
                                                        currency: 'THB'
                                                    })}</span>
                                                </Card.Text>
                                                <Row>
                                                    <Link 
                                                    to={{
                                                        pathname: "/cart",
                                                        state: {selected}
                                                    }}>
                                                    <Button type="submit" className="rounded-pill btn-lg" style={{ backgroundColor: '#00b495', borderColor: '#00b495' }}>Add to cart</Button>
                                                    </Link>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
                <Row >
                    <div className="text-end fixed-bottom px-5 py-4">
                        <h4 className="d-inline px-4">Select {count} products</h4>
                        <h4 className="d-inline">Subtotal {subTotalPrice.toLocaleString('th-TH', {
                            style: 'currency',
                            currency: 'THB'
                        })}</h4>
                    </div>
                </Row>
            </Container>
        </>
    );
};
export default Wishlist;