/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const from = location.state?.from.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container w-50 mx-auto mt-4" style={{ maxWidth: '600px' }}>
      <h2 className="text-primary text-center fw-normal">
        Welcome back! Login
      </h2>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          className=""
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
      <p className="mt-3 text-center">
        New to Genius Car?
        <span
          className="text-danger ms-2"
          style={{ cursor: 'pointer' }}
          onClick={navigateRegister}
        >
          Please Register!
        </span>
      </p>
    </div>
  );
};

export default Login;
