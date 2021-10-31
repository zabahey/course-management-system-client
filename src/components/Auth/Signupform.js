import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { signup } from '../../api/user';

export default function Signupform() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const roleSelectRef = useRef();
  const [notification, setNotification] = useState(null);
  const history = useHistory();

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    const sendRequest = async () => {
      const data = await signup(
        usernameRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value,
        roleSelectRef.current.value
      );

      if (data.code === 201) {
        setNotification({
          type: 'success',
          title: 'Signup Successfully',
          messages: ['The system will redirect to login page within 5 seconds'],
        });

        setTimeout(() => {
          history.push('/login');
        }, 5000);
      } else if (data.code === 400) {
        const messages = data.error.errors.map((e) => e.msg);
        setNotification({
          type: 'danger',
          title: 'Signup Failed',
          messages,
        });
      }
    };

    sendRequest();
  };

  return (
    <Row className="justify-content-md-center mt-5">
      {notification ? (
        <Alert variant={notification.type}>
          <Alert.Heading>{notification.title}</Alert.Heading>
          <div>
            <ul>
              {notification.messages.map((message) => (
                <li>{message}</li>
              ))}
            </ul>
          </div>
        </Alert>
      ) : null}
      <Col lg={4} md={6} sm={12}>
        <Form onSubmit={signupSubmitHandler}>
          <div className="text-center">
            <h3>Signup</h3>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control
              ref={firstNameRef}
              type="text"
              placeholder="Enter first name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              ref={lastNameRef}
              type="text"
              placeholder="Enter last name"
              required
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example"
              ref={roleSelectRef}
            >
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary btn-block" type="submit">
              Signup
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
