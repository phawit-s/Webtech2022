import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Signin = () => {

  return (
    <div style={StyleRegister}>
      <Container>
        <Row className="justify-content-center">
            <Card className="rounded-3 mt-5 py-3 px-4">
                <Form>
                <Form.Group className="mb-4 my-3" controlId="formGroupEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="username" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"/>
                </Form.Group>
                <Button variant="primary px-3" type="submit">Submit</Button>
              </Form>
            </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
const StyleRegister={
      backgroundImage: "url('https://www.stormforge.io/wp-content/uploads/2020/10/mountain-scape-uai-1440x960.jpg')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
};
