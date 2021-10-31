import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, Button, Alert } from 'react-bootstrap';
import { login } from '../../store/authAction';
import { Link, useHistory } from 'react-router-dom';

export default function LoginForm() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/courses');
    }
  }, [history, isAuthenticated]);

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(login(usernameRef.current.value, passwordRef.current.value));
  };
  return (
    <Row className="justify-content-md-center mt-5">
      <Col lg={4} md={6} sm={12}>
        {!!notification ? (
          <Alert variant="danger">
            <Alert.Heading>{notification.title}</Alert.Heading>
            <div>
              <ul>
                {notification.messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          </Alert>
        ) : null}
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
        <div className="text-center mt-3">
          <Link to="/signup">Register a new user</Link>
        </div>
      </Col>
    </Row>
  );
}
