import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../contexts/AuthContext";
import Form from "react-bootstrap/Form";

const Register = () => {
  const { currentUser, testuser } = useAuth(); // use state,function from authcontext

  useEffect(() => {
    testuser(); // use function from authcontext
  }, []);
  console.log(currentUser); // use state from authcontext

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
          background: #00b495 !important;
          border: 1px solid #00b495
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
                <h3 class="mb-4 text-center">CREATE ACCOUNT</h3>
                <Form.Group className="mb-4 my-3">
                  <Form.Control type="username" placeholder="User Name" />
                </Form.Group>
                <Form.Group className="mb-4 my-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type="password" placeholder="Confirm Passsword" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Button variant="submit px-3" type="submit">SIGN UP</Button>
                </Form.Group>
                <p2 class="text-center">Have already an account ? </p2>
                <Link to="/signin"><p2 style={StyleBody.underline}>Login here</p2></Link>
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
const StyleBody = {
  backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-shot-golden-gate-bridge-with-amazing-clear-blue-sky_181624-1777.jpg?w=996&t=st=1667019026~exp=1667019626~hmac=c8bf712dd1056f4cbbb1894d6f53c84ef565eb7aa00576423081754fafd2b87e')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',

  underline: {textDecorationLine: 'underline', color: 'white' }
};
