import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import suggestiondata from "../assets/Suggestion.json";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import { useToasts } from "react-toast-notifications";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Container,
  Card,
  Image,
} from "react-bootstrap";
import Navbarcomponent from "./navbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { currentUser, productdetail, favouriteProduct, gotodetail } =
    useAuth();
  const [data, setData] = useState([...productdetail]);
  const [sugdata, setSugdata] = useState([...suggestiondata]);
  const [buttonhover, setbuttonhover] = useState(false);
  const [hoverimage, setHoverimage] = useState(false);
  const [imageid, setImageid] = useState("");
  const [productid, setProductid] = useState("");
  const [colorid, setColorid] = useState("");
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    setData([...productdetail]);
  }, [productdetail]);

  const changepage = (index) => {
    gotodetail(sugdata[index]);
    history.push({
      pathname: "/description",
    });
  };

  if(!currentUser){
    return <Redirect to="/signin" />;
  }
  
  const changeimage = async (index) => {
    setHoverimage(!hoverimage);
    setImageid(index);
  };
  const changecolor = (index, index2) => {
    setProductid(index);
    setColorid(index2);
  };
  const addfavourite = (index) => {

    favouriteProduct(sugdata[index]);
    addToast("Add to wishlist!", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <>
      <style type="text/css">
        {`
          .row>*{
            flex-shrink: 0;
            width: 100%;
            max-width: 100%;
            margin-top: var(--bs-gutter-y);
            padding-right:0;
          }
          .container-fluid{
            --bs-gutter-x: 0;
            --bs-gutter-y: 0;
          }
          body {
            background-color: #fff;
          }
          .react-slideshow-container+ul.indicators .each-slideshow-indicator:before{
            background: white;
          }
        `}
      </style>
      <Container fluid>
        <Navbarcomponent />

        <Row>
          <Slide
            autoplay={true}
            arrows={false}
            duration="1700"
            indicators={true}
          >
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage:
                    "url(https://media.graphassets.com/resize=w:1920,h:1080,fit:crop/quality=value:65/auto_image/compress/9A0OfCEbQha0HFkpFZKG)",
                  height: "800px",
                  width: "900",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage:
                    "url(https://d2pz7ev4hh4qcl.cloudfront.net/assets/site_variable/image/3/Header-01.jpg)",
                  height: "800px",
                  width: "900",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage:
                    "url(https://d3emaq2p21aram.cloudfront.net/media/cache/report_image_flex/uploads/StudioNeon-SydneyAustralia-LaraHotz/StudioNeon-Australia_191.jpg)",
                  height: "800px",
                  width: "900",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </Slide>
        </Row>
      </Container>
      <Container>
        <Row>
          <div style={{ float: "left", marginLeft: "5%" }}>
            <div>
              <div id="main">
                <h1 style={{ margin: 0, color: "darkblue", fontSize: "50px" }}>
                  Bestsellers
                </h1>
                <button
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
                </button>
              </div>
              <Row>
                {sugdata.map((productdata, index) => {
                  return (
                    <Col className="mb-5" key={index}>
                      <Card style={{ border: "none" }}>
                        <div
                          style={{ border: "none", cursor: "pointer" }}
                          onMouseEnter={() => changeimage(index)}
                          onMouseLeave={() => setHoverimage(!hoverimage)}
                        >
                          {hoverimage &&
                          imageid === index &&
                          productid === "" ? (
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

                        <h5
                          style={{ marginLeft: "30px", marginBottom: "20px" }}
                        >
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
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
