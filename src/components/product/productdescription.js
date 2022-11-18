import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import suggestiondata from "../../assets/Suggestion.json";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import { useToasts } from "react-toast-notifications";
import {
  Button,
  Card,
  Image,
  Container,
} from "react-bootstrap";
import Navbarcomponent from "../navbar";
import Footer from "../footer";
import { useHistory } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Productdescription = () => {
  const { productdetail, favouriteProduct, gotodetail, addtocart } = useAuth();
  const [data, setData] = useState([...productdetail]);
  const [sugdata, setSugdata] = useState([...suggestiondata]);
  const [hoverimage, setHoverimage] = useState(false);
  const [buttonhover, setbuttonhover] = useState(false);
  const [selectedoption, setSelectedoption] = useState("0");
  const [imageid, setImageid] = useState("");
  const [productid, setProductid] = useState("");
  const [colorid, setColorid] = useState("");
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    setData([...productdetail]);
    window.scrollTo(0, 0);
  }, [productdetail]);

  const changepage = (index) => {
    gotodetail(sugdata[index]);
    window.scrollTo(0, 0);
  };
  const pickcart = (index) => {
    addtocart(data[index]);
    addToast("Add to cart!", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  const changeimage = async (index) => {
    setHoverimage(!hoverimage);
    setImageid(index);
  };
  const changecolor = (index, index2) => {
    setProductid(index);
    setColorid(index2);
  };
  const addfavourite = (index) => {
    favouriteProduct(data[index]);
    addToast("Add to wishlist!", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  const changeoption = (index) => {
    setSelectedoption(index);
  };
  return (
    <>
      <Navbarcomponent />
      <Container fluid>
        <Row>
          <div style={{ float: "left", width: "15%", height: "1900px" }} />
          <div
            id="Mscreen"
            style={{
              marginTop: "20px",
              height: "1800px",
              float: "left",
              width: "70%",
            }}
          >
            <div style={{ width: "60%", float: "left" }}>
              <div
                style={{
                  maxWidth: "800px",
                  height: "1px",
                  padding: "0px",
                  marginBottom: "20px",
                }}
              >
                {data.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.product_options[selectedoption].image_name.map(
                        (image, index) => {
                          if (index === 0 || index === 3) {
                            return (
                              <Image
                                src={`${process.env.PUBLIC_URL}/image/${image}`}
                                width={"90%"}
                                key={index}
                                style={{
                                  position: "relative",
                                }}
                              />
                            );
                          } else {
                            return (
                              <Image
                                src={`${process.env.PUBLIC_URL}/image/${image}`}
                                width={"45%"}
                                key={index}
                                style={{
                                  position: "relative",
                                }}
                              />
                            );
                          }
                        }
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              id="right"
              style={{
                top: "0",
                position: "sticky",
                width: "40%",
                float: "right",
              }}
            >
              {data.map((value, index) => {
                console.log(value);
                return (
                  <div key={index}>
                    <h2
                      style={{
                        margin: "20px",
                        fontSize: "40px",
                        color: "#16193a",
                      }}
                    >
                      {value.name}
                    </h2>
                    <h4
                      style={{
                        margin: "20px",
                        fontSize: "40px",
                        color: "#16193a",
                      }}
                    >
                      {value.brand}
                    </h4>

                    {value.product_options.map((productimage, index2) => {
                      return (
                        <Image
                          src={`${process.env.PUBLIC_URL}/image/${productimage.image_name[0]}`}
                          width="70"
                          height="70"
                          key={index2}
                          style={{ cursor: "pointer", margin: "10px" }}
                          onClick={() => changeoption(index2)}
                        />
                      );
                    })}
                    {value.priceBrforeDiscounted ? (
                      <Col>
                        <div className="d-flex">
                          <h4
                            style={{
                              marginLeft: "30px",

                              textDecoration: "line-through",
                            }}
                          >
                            {value.priceBrforeDiscounted.toLocaleString(
                              "th-TH",
                              {
                                style: "currency",
                                currency: "THB",
                              }
                            )}
                          </h4>
                          <h4
                            style={{
                              marginLeft: "30px",
                            }}
                          >
                            {value.price.toLocaleString("th-TH", {
                              style: "currency",
                              currency: "THB",
                            })}
                          </h4>
                        </div>
                      </Col>
                    ) : (
                      <h3 style={{ margin: "15px" }}>
                        {value.price.toLocaleString("th-TH", {
                          style: "currency",
                          currency: "THB",
                        })}
                      </h3>
                    )}
                    <Col>
                      <Button
                        onClick={() => pickcart(index)}
                        type="button"
                        style={{
                          marginLeft: "20px",
                          marginTop: "10px",
                          padding: "10px",
                          fontSize: "18px",
                          backgroundColor: "green",
                          border: "1px solid white",
                          borderRadius: "15px",
                          color: "#fff",
                        }}
                      >
                        Add to cart
                      </Button>
                      <AiFillHeart
                        onClick={() => addfavourite(index)}
                        style={{
                          cursor: "pointer",
                          marginTop: "10px",
                          marginLeft: "20px",
                          color: "red",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Col>

                    <hr />
                    <details>
                      <summary>Description</summary>
                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        {value.description.product_details.details}
                      </h5>
                    </details>
                    <hr />
                    <details>
                      <summary>Connection &amp; Accessories</summary>

                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        Connection :{" "}
                        {value.description.product_details.connection}
                      </h5>
                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        Accessories :{" "}
                        {value.description.product_details.accessories}
                      </h5>
                    </details>
                    <hr />
                    <details>
                      <summary>Features</summary>
                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        Type : {value.description.product_features.type}
                      </h5>
                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        Port Input :{" "}
                        {value.description.product_features.port_input}
                      </h5>
                      <h5 style={{ marginLeft: "20px", marginTop: "15px" }}>
                        Microphone :{" "}
                        {value.description.product_features.microphone === false
                          ? "True"
                          : "False"}
                      </h5>
                    </details>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </Row>

        <div style={{ float: "left", marginLeft: "15%" }}>
          <div>
            <div id="main">
              <h1 style={{ margin: 0, color: "darkblue", fontSize: "50px" }}>
                Bestsellers
              </h1>
              <Button
                onMouseEnter={() => setbuttonhover(!buttonhover)}
                onMouseLeave={() => setbuttonhover(!buttonhover)}
                onClick={() =>
                  history.push({
                    pathname: `/all`,
                  })
                }
                type="button"
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  padding: "10px",
                  fontSize: "18px",
                  backgroundColor: "#fff",
                  border: buttonhover
                    ? "1px solid green"
                    : "1px solid darkblue",
                  borderRadius: "20px",
                  color: buttonhover ? "green" : "darkblue",
                }}
              >
                Shop All Product
              </Button>
            </div>
            <Row>
              {sugdata.map((productdata, index) => {
                return (
                  <Col xs={2} md={3} xl={4} className="mb-5" key={index}>
                    <Card style={{ border: "none" }}>
                      <div
                        style={{ border: "none", cursor: "pointer" }}
                        onMouseEnter={() => changeimage(index)}
                        onMouseLeave={() => setHoverimage(!hoverimage)}
                      >
                        {hoverimage && imageid === index && productid === "" ? (
                          <Image
                            src={`${process.env.PUBLIC_URL}/image/${productdata.product_options[0].image_name[1]}`}
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
                            src={`${process.env.PUBLIC_URL}/image/${productdata.product_options[colorid].image_name[1]}`}
                            width={"350px"}
                            height={"350px"}
                            onClick={() => changepage(index)}
                            style={{
                              position: "relative",
                            }}
                          />
                        ) : productid === index ? (
                          <Image
                            src={`${process.env.PUBLIC_URL}/image/${productdata.product_options[colorid].image_name[0]}`}
                            width={"350px"}
                            height={"350px"}
                            onClick={() => changepage(index)}
                            style={{
                              position: "relative",
                            }}
                          />
                        ) : (
                          <Image
                            src={`${process.env.PUBLIC_URL}/image/${productdata.product_options[0].image_name[0]}`}
                            width={"350px"}
                            height={"350px"}
                            onClick={() => changepage(index)}
                            style={{
                              position: "relative",
                            }}
                          />
                        )}
                        <AiOutlineHeart
                          onClick={() => addfavourite(index)}
                          style={{
                            color: "red",
                            position: "relative",
                            left: "10px",
                            bottom: "140px",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        />
                      </div>

                      <Card.Body>
                        {productdata.product_options.map(
                          (productimage, index2) => {
                            return (
                              <Image
                                src={`${process.env.PUBLIC_URL}/image/${productimage.image_name[0]}`}
                                width="70"
                                height="70"
                                key={index2}
                                style={{ cursor: "pointer" }}
                                onClick={() => changecolor(index, index2)}
                              />
                            );
                          }
                        )}
                      </Card.Body>

                      <h5 style={{ marginLeft: "30px", marginBottom: "20px" }}>
                        {productdata.name}
                      </h5>
                      <h6
                        style={{
                          marginLeft: "30px",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
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
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Productdescription;
