import React, { useRef } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { login } from '../../api/user';

export default function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const sendRequest = async () => {
      await login(usernameRef.current.value, passwordRef.current.value);
    };
    sendRequest();
  };
  return (
    <Row className="justify-content-md-center mt-5">
      <Col lg={4} md={6} sm={12}>
        <Form onSubmit={loginSubmitHandler}>
          <div className="text-center">
            <h3>Login</h3>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={usernameRef}
              type="text"
              placeholder="Enter username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary btn-block" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
