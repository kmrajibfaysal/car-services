import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const userNameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
  };

  const navigateLogin = () => {
    navigate('/login');
  };
  return (
    <div className="container w-50 mx-auto mt-4" style={{ maxWidth: '600px' }}>
      <h2 className="text-primary text-center display-5 fw-normal">
        Please Register!
      </h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={userNameRef}
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to terms & conditions" />
        </Form.Group>
        <Button
          onClick={handleRegister}
          className=""
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <p className="mt-3 text-center">
        Already have an account?
        <span
          className="text-danger ms-2"
          style={{ cursor: 'pointer' }}
          onClick={navigateLogin}
        >
          Please Login!
        </span>
      </p>
    </div>
  );
};

export default Register;
