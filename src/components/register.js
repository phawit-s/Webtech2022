import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { currentUser, testuser } = useAuth(); // use state,function from authcontext

  useEffect(() => {
    testuser(); // use function from authcontext
  }, []);
  console.log(currentUser); // use state from authcontext

  return (
    <Container>
      <Row className="mb-4 mt-5">
        <Col>
          <div className="bg-primary border">register</div>
        </Col>
        <Col className="bg-primary border">2 of 2</Col>
      </Row>
      
    </Container>
  );
};

export default Register;
