import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

const Signin = () => {


  return (
    <>
      <style type="text/css">
        {`
        .wrap{
          position: relative;
          color: #F3DED9;
          padding: 7em 0; 
        }
        .btn-submit {
          width : 100%;
          border-radius: 40px;
          background: #DAF7A6 !important;
          border: 1px solid #FFC300
        }
        .form-group {
          position: relative;
        }
        .form-control {
          border: none;
          height: 50px;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 40px;
          padding-left: 20px;
          padding-right: 20px;
          width: 100%;
          color: white;
        }
        .form-control::-webkit-input-placeholder {
          color: #F3DED9;
        }
        `}
      </style>

      <div style={StyleBody}>
        <Container>
          <Row>
            <div className="wrap col-6 mx-auto">
              <Form>
                <h3 className="mb-4 text-center">MEMBER LOGIN</h3>
                <Form.Group className="mb-4 my-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Button variant="submit px-3" type="submit">LOGIN</Button>
                </Form.Group>
                <p2 className="text-center">New Account ? </p2>
                <Link to="/register"><p2 style={StyleBody.underline}>Sign up Now </p2></Link>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Signin;
const StyleBody = {
  backgroundImage: "url('https://i.pinimg.com/originals/1f/b2/2c/1fb22c2721dbab799e9f84368d1961bd.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',

  underline: {textDecorationLine: 'underline', color: 'white' }
};
