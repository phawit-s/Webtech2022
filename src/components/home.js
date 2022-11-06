import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const history = useHistory();
  const {
    favproduct,
    filterbrands,
    filterprice,
    datasort,
    favouriteProduct,
    filterbybrand,
    filterbyprice,
    sortbyprice,
  } = useAuth(); // use state,function from authcontext

  useEffect(() => {
    sortbyprice("high","In Ear"); // use function from authcontext
  }, []);
  console.log(datasort); // use state from authcontext

  const changepage = () => {
    // go to another path
    history.push({
      pathname: `/register`,
    });
  };

  return (
    <Container>
      <Row className="mb-4 mt-5">
        <Col>
          <div className="bg-primary border">First item</div>
        </Col>
        <Col className="bg-primary border">2 of 2</Col>
      </Row>
      <Row>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" onClick={changepage}>
            go to register
          </Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
      </Row>
    </Container>
  );
};

export default Home;
