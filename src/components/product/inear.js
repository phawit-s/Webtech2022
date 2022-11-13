import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ineardata from "../../assets/Inear.json";
import {
  Form,
  Button,
  Card,
  Image,
  Breadcrumb,
  Carousel,
} from "react-bootstrap";
import Navbarcomponent from "../navbar";

const Inear = () => {
  const [data, setData] = useState([...ineardata]);
  const [hoverimage, setHoverimage] = useState(false);
  const [imageid, setImageid] = useState("");
  const [productid, setProductid] = useState("");
  const [colorid, setColorid] = useState("0");
  console.log(data);
  const changeimage = (index) => {
    setHoverimage(!hoverimage);
    setImageid(index);
  };
  const changecolor = (index, index2) => {
    setProductid(index);
    setColorid(index2);
  };
  return (
    <>
      <Navbarcomponent />
      <Container className="mt-5">
        <Row className="mb-3">
          <Col>
            <h1 className="text-topic" style={{ color: "#16193a" }}>
              Inear
            </h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <text style={{ color: "#16193a" }}>Filter: </text>
            <text style={{ color: "#16193a" }} className="mx-4">
              Availability{" "}
            </text>
            <text style={{ color: "#16193a" }} className="mx-5">
              Price{" "}
            </text>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <text>Sort by:</text>
          </Col>
        </Row>
        <Row>
          {data.map((productdata, index) => {
            return (
              <Col xs={2} md={3} xl={4} className="mb-5" key={index}>
                <Card style={{ border: "none" }}>
                  <div
                    onMouseEnter={() => changeimage(index)}
                    onMouseLeave={() => setHoverimage(!hoverimage)}
                    style={{ cursor: "pointer" }}
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

export default Inear;
