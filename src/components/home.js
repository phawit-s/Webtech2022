import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../contexts/AuthContext";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
    addtocart
  } = useAuth(); // use state,function from authcontext

  useEffect(() => {
    sortbyprice("low", "In Ear")// use function from authcontext
  }, []);

  console.log(datasort); // use state from authcontext
  // const slideImages = [
  //   'https://cdn.thewirecutter.com/wp-content/media/2021/11/kidsheadphones-2048px-7353.jpg?auto=webp&quality=75&width=1024',
  //   'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
  // ];

  return (
    <>
      <style type="text/css">
        {`

        `}
      </style>
      <Container>
        <Slide autoplay={true} arrows={false} duration='1700' indicators={true}>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://d2pz7ev4hh4qcl.cloudfront.net/assets/site_variable/image/3/Header-01.jpg)'
                , "height": "400px", "width": "900", "background-size": "cover"
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/10/52/45/240_F_510524517_U87aQQk7jzLvBdlpbgyZSIR4XmET0kk3.jpg)'
                , "height": "400px", "width": "900", "background-size": "cover"
              }}
            >
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/82/19/00/240_F_282190082_3wT9j8kLuhGpda70PNGK6CabxYVtBd25.jpg)'
                , "height": "400px", "width": "900", "background-size": "cover"
              }}
            >
            </div>
          </div>
        </Slide>
      </Container>
    </>
  );

  ;
};

export default Home;
