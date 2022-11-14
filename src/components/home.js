import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Navbarcomponent from "./navbar";
import { useAuth } from "../contexts/AuthContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
  const history = useHistory();
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
  } = useAuth(); // use state,function from authcontext

  useEffect(() => {
    sortbyprice("low", "In Ear"); // use function from authcontext
  }, []);

  console.log(datasort); // use state from authcontext

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
            background-color: black;
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
                  "background-size": "cover",
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
                  "background-size": "cover",
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
                  "background-size": "cover",
                }}
              ></div>
            </div>
          </Slide>
        </Row>
      </Container>
    </>
  );
};

export default Home;
