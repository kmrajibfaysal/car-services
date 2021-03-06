/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const from = location.state?.from.pathname || '/';

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
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

  const handleForgetPassword = async () => {
    if (!validateEmail(emailRef.current.value)) {
      toast('Please enter a valid email.');
      return;
    }
    await sendPasswordResetEmail(emailRef.current.value);
    toast('Sent email to reset password!');
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
        <input
          onClick={handleSubmit}
          className="btn btn-primary"
          variant="primary"
          value="Login"
          type="submit"
        />

        {sending ? <p>Sending reset email!</p> : ''}
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
      <p className="mt-3 text-center">
        <span
          className="text-primary ms-2"
          style={{ cursor: 'pointer' }}
          onClick={handleForgetPassword}
        >
          Forget Password?
        </span>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </p>
    </div>
  );
};

export default Login;
