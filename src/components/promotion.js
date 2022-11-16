import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PromotionData from "../assets/Promotion.json";
import { Form, Button, Card, Image, InputGroup } from "react-bootstrap";
import Navbarcomponent from "./navbar";
import Footer from "./footer";
import { useAuth } from "../contexts/AuthContext";
import { useToasts } from "react-toast-notifications";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Promotion = () => {
    const [data, setData] = useState([...PromotionData]);
    const [sorteddata, setSorteddata] = useState([...PromotionData]);
    const [selectbrands, setSelectedBrands] = useState("Brands");
    const [pricelowtohigh, setPriceLowtoHigh] = useState("Price");
    const [hoverimage, setHoverimage] = useState(false);
    const [toggleRoom, setToggleRoom] = useState(false);
    const [togglePrice, setTogglePrice] = useState(false);
    const [toggleSortPrice, setToggleSortPrice] = useState(false);
    const [imageid, setImageid] = useState("");
    const [productid, setProductid] = useState("");
    const [colorid, setColorid] = useState("0");
    const minprice = useRef(0);
    const maxprice = useRef(0);
    const { addToast } = useToasts();
    const history = useHistory();
    const {
        filterbrands,
        filterprice,
        datasort,
        favouriteProduct,
        filterbybrand,
        filterbyprice,
        sortbyprice,
        addtocart,
        gotodetail,
    } = useAuth();

    useEffect(() => {
        if (datasort) {
            setData(datasort);
        }
    }, [datasort]);

    useEffect(() => {
        if (filterbrands) {
            setData(filterbrands);
        }
    }, [filterbrands]);

    useEffect(() => {
        if (filterprice) {
            setData(filterprice);
        }
    }, [filterprice]);

    const addfavourite = (index) => {
        favouriteProduct(data[index]);
        addToast("Add to wishlist!", {
            appearance: "success",
            autoDismiss: true,
        });
    };
    const changepage = (index) => {
        gotodetail(data[index]);
        history.push({
            pathname: "/description",
        });
    };
    const openbrands = () => {
        setToggleRoom(!toggleRoom);
        setTogglePrice(false);
    };
    const openPrice = () => {
        setTogglePrice(!togglePrice);
        setToggleRoom(false);
    };

    const changeimage = async (index) => {
        setHoverimage(!hoverimage);
        setImageid(index);
    };
    const changecolor = (index, index2) => {
        setProductid(index);
        setColorid(index2);
    };
    const sortprice = (value) => {
        sortbyprice(value, "Promotion");
        setSelectedBrands("Brands");
        setPriceLowtoHigh(value);
        setToggleSortPrice(!toggleSortPrice);
        if (datasort) {
            setData(datasort);
        }
    };

    const opensort = () => {
        setToggleSortPrice(!toggleSortPrice);
    };
    const selectbybrand = (value) => {
        if (value !== "All") {
            filterbybrand(value, "Promotion");
            setToggleRoom(!toggleRoom);
            setSelectedBrands(value);
        } else {
            setSelectedBrands("Brands");
            setToggleRoom(!toggleRoom);
            setData([...PromotionData]);
        }
    };

    const searchprice = () => {
        setSelectedBrands("Brands");
        filterbyprice(
            parseInt(minprice.current.value) + minprice.current.value * 0.1,
            parseInt(maxprice.current.value) + maxprice.current.value * 0.1,
            "Promotion"
        );
    };

    var uniq = sorteddata
        .map((value) => {
            return { count: 1, brand: value.brand };
        })
        .reduce((a, b) => {
            a[b.brand] = (a[b.brand] || 0) + b.count;
            return a;
        }, {});

    const sortedbrands = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b]);
    sortedbrands.push("All");

    return (
        <>
            <Navbarcomponent />
            <Container className="mt-5">
                <Row className="mb-3">
                    <Col>
                        <h1 className="text-topic" style={{ color: "#16193a" }}>
                            Promotion
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <div style={{ display: "flex" }}>
                            <h6 style={{ color: "#16193a" }}>Filter: </h6>
                            <div>
                                <h6
                                    onClick={() => openbrands()}
                                    style={{
                                        color: "#16193a",
                                        cursor: "pointer",
                                    }}
                                    className="mx-3"
                                >
                                    {selectbrands}
                                    {toggleRoom ? (
                                        <IoIosArrowUp style={{ marginLeft: "5px" }} />
                                    ) : (
                                        <IoIosArrowDown style={{ marginLeft: "5px" }} />
                                    )}
                                </h6>

                                {toggleRoom ? (
                                    <div
                                        width="200px"
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid gray",
                                            padding: "10px",
                                            marginLeft: "10px",
                                            marginTop: "10px",
                                            borderRadius: "5px",
                                            position: "absolute",
                                            zIndex: "1",
                                        }}
                                    >
                                        {sortedbrands.map((value, index) => {
                                            return (
                                                <Row
                                                    key={index}
                                                    onClick={() => selectbybrand(value)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <h6 color="black" key={index}>
                                                        {value}
                                                    </h6>
                                                </Row>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div>
                                <h6
                                    style={{ color: "#16193a", cursor: "pointer" }}
                                    className="mx-5"
                                    onClick={() => openPrice()}
                                >
                                    Price{" "}
                                    {togglePrice ? (
                                        <IoIosArrowUp style={{ marginLeft: "5px" }} />
                                    ) : (
                                        <IoIosArrowDown style={{ marginLeft: "5px" }} />
                                    )}
                                </h6>

                                {togglePrice ? (
                                    <div
                                        width="200px"
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid gray",
                                            padding: "10px",
                                            marginLeft: "25px",
                                            marginTop: "10px",
                                            borderRadius: "5px",
                                            position: "absolute",
                                            zIndex: "1",
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text>฿</InputGroup.Text>
                                                    <InputGroup.Text>Min</InputGroup.Text>
                                                    <Form.Control ref={minprice} />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text>฿</InputGroup.Text>
                                                    <InputGroup.Text>Max</InputGroup.Text>
                                                    <Form.Control ref={maxprice} />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ display: "flex", justifyContent: "right" }}>
                                                <Button
                                                    width={"20px"}
                                                    style={{ backgroundColor: "green" }}
                                                    onClick={() => searchprice()}
                                                >
                                                    Search
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </Col>

                    <Col style={{ textAlign: "right" }}>
                        <div style={{ position: "relative" }}>
                            <h6 style={{ cursor: "pointer" }} onClick={() => opensort()}>
                                Sort by: {pricelowtohigh}
                                {toggleSortPrice ? (
                                    <IoIosArrowUp style={{ marginLeft: "5px" }} />
                                ) : (
                                    <IoIosArrowDown style={{ marginLeft: "5px" }} />
                                )}
                            </h6>

                            {toggleSortPrice ? (
                                <div
                                    style={{
                                        textAlign: "right",
                                        position: "absolute",
                                        zIndex: "1",
                                        right: "0px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <h6 onClick={() => sortprice("Low to High")}>
                                        {"Low to High"}
                                    </h6>
                                    <h6 onClick={() => sortprice("High to Low")}>
                                        {"High to Low"}
                                    </h6>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </Col>
                </Row>
                <Row>
                    {data.map((productdata, index) => {
                        return (
                            <Col className="mb-5" key={index}>
                                <Card style={{ border: "none" }}>
                                    <div
                                        style={{ border: "none", cursor: "pointer" }}
                                        onMouseEnter={() => changeimage(index)}
                                        onMouseLeave={() => setHoverimage(!hoverimage)}
                                    >
                                        {hoverimage && imageid === index && productid === "" ? (
                                            <Image
                                                src={`/image/${productdata.product_options[0].image_name[1]}`}
                                                width={"350px"}
                                                height={"350px"}
                                                onClick={() => changepage(index)}
                                                style={{
                                                    position: "relative",
                                                }}
                                            />
                                        ) : hoverimage &&
                                            imageid === index &&
                                            productid === index ? (
                                            <Image
                                                src={`/image/${productdata.product_options[colorid].image_name[1]}`}
                                                width={"350px"}
                                                height={"350px"}
                                                onClick={() => changepage(index)}
                                                style={{
                                                    position: "relative",
                                                }}
                                            />
                                        ) : productid === index ? (
                                            <Image
                                                src={`/image/${productdata.product_options[colorid].image_name[0]}`}
                                                width={"350px"}
                                                height={"350px"}
                                                onClick={() => changepage(index)}
                                                style={{
                                                    position: "relative",
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                src={`/image/${productdata.product_options[0].image_name[0]}`}
                                                width={"350px"}
                                                height={"350px"}
                                                onClick={() => changepage(index)}
                                                style={{
                                                    position: "relative",
                                                }}
                                            />
                                        )}
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "5rem",
                                            height: " 5rem",
                                            backgroundColor: "rgb(255, 135, 135)",
                                            borderRadius: "10rem",
                                            border: "1px solid black",
                                            right: "0",
                                            top: "0",
                                            left: "350px",
                                            fontSize: "1.5rem",
                                            color: "black",
                                            position: "absolute",
                                        }}>
                                            <p className="m-0">-{productdata.discount}%</p>
                                        </div>
                                    </div>

                                    <Card.Body>
                                        {productdata.product_options.map((productimage, index2) => {
                                            return (
                                                <Image
                                                    src={`/image/${productimage.image_name[0]}`}
                                                    width="70"
                                                    height="70"
                                                    key={index2}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => changecolor(index, index2)}
                                                />
                                            );
                                        })}
                                    </Card.Body>

                                    <h5 style={{ marginLeft: "30px", marginBottom: "20px" }}>
                                        {productdata.name}
                                    </h5>
                                    <div className="d-flex">
                                        <h6
                                            style={{
                                                marginLeft: "30px",
                                                fontSize: "20px",
                                                textDecoration: "line-through"
                                            }}
                                        >
                                            {productdata.priceBrforeDiscounted.toLocaleString("th-TH", {
                                                style: "currency",
                                                currency: "THB",
                                            })}
                                        </h6>
                                        <h6
                                            style={{
                                                marginLeft: "30px",
                                                fontSize: "20px",
                                            }}>
                                            {productdata.price.toLocaleString("th-TH", {
                                                style: "currency",
                                                currency: "THB",
                                            })}
                                        </h6>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default Promotion;
