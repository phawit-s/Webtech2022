import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import headphonedata from "../../assets/Headphone.json";
import {
  Form,
  Button,
  Card,
  Image,
  Breadcrumb,
  Carousel,
} from "react-bootstrap";
import Navbarcomponent from "../navbar";
import { useAuth } from "../../contexts/AuthContext";

const Headphone = () => {
  const [data, setData] = useState([...headphonedata]);
  const [hoverimage, setHoverimage] = useState(false);
  const [toggleRoom, setToggleRoom] = useState(false);
  const [imageid, setImageid] = useState("");
  const [productid, setProductid] = useState("");
  const [colorid, setColorid] = useState("0");
  const {
    favproduct,
    filterbrands,
    filterprice,
    datasort,
    productcart,
    favouriteProduct,
    filterbybrand,
    filterbyprice,
    sortbyprice,
    addtocart,
  } = useAuth();
  useEffect(() => {
    sortbyprice("low", "WirelessHeadphone");
  }, []);
  const toggleroom = () => {
    setToggleRoom(!toggleRoom);
  };
  const changeimage = async (index) => {
    setHoverimage(!hoverimage);
    setImageid(index);
  };
  const changecolor = (index, index2) => {
    setProductid(index);
    setColorid(index2);
  };
  const sortprice = ()=>{
    sortbyprice("low", "WirelessHeadphone")
    if(datasort){
      setData(datasort)
    }
  

  }
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        duration: 0.1,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.1,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <>
      <Navbarcomponent />
      <Container className="mt-5">
        <Row className="mb-3">
          <Col>
            <h1 className="text-topic" style={{ color: "#16193a" }}>
              Headphone
            </h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <div style={{ display: "flex" }}>
              <text style={{ color: "#16193a" }}>Filter: </text>
              <motion.div className="menu-item" onMouseDown={toggleroom}>
                <text
                  style={{ color: "#16193a", cursor: "pointer" }}
                  className="mx-3"
                >
                  Availability{" "}
                </text>
                <motion.div
                  className="sub-menu"
                  initial="exit"
                  animate={toggleRoom ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <div
                    width="200px"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid gray",
                      padding: "10px",
                      marginLeft: "15px",
                      marginTop: "10px",
                      borderRadius: "5px",
                      position: "absolute",
                      zIndex:"1"
                    }}
                  >
                    <Row>
                      <text color="black" >Brands</text>
                    </Row>
                    <Row>
                      <text color="black">Price</text>
                    </Row>
                  </div>
                </motion.div>
              </motion.div>

              <text style={{ color: "#16193a" }} className="mx-5">
                Price{" "}
              </text>
            </div>
          </Col>

          <Col style={{ textAlign: "right" }}>
            <text>Sort by:</text>
            <text onClick={sortprice} style={{cursor:"pointer"}}>Price</text>
          </Col>
        </Row>
        <Row>
          {data.map((productdata, index) => {
            return (
              <Col xs={2} md={3} xl={4} className="mb-5" key={index}>
                <Card style={{ border: "none" }}>
                  <div
                    style={{ border: "1px solid black" }}
                    onMouseEnter={() => changeimage(index)}
                    onMouseLeave={() => setHoverimage(!hoverimage)}
                  >
                    {hoverimage && imageid === index && productid === "" ? (
                      <Image
                        src={`/image/${productdata.product_options[0].image_name[1]}`}
                        width={"350px"}
                        height={"350px"}
                      />
                    ) : hoverimage &&
                      imageid === index &&
                      productid === index ? (
                      <Image
                        src={`/image/${productdata.product_options[colorid].image_name[1]}`}
                        width={"350px"}
                        height={"350px"}
                      />
                    ) : productid === index ? (
                      <Image
                        src={`/image/${productdata.product_options[colorid].image_name[0]}`}
                        width={"350px"}
                        height={"350px"}
                      />
                    ) : (
                      <Image
                        src={`/image/${productdata.product_options[0].image_name[0]}`}
                        width={"350px"}
                        height={"350px"}
                      />
                    )}
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
                  <h6 style={{ marginLeft: "30px", fontSize: "20px" }}>
                    {productdata.price.toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}{" "}
                  </h6>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Headphone;
