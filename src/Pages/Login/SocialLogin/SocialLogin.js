import React from 'react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebook from '../../../images/Social/facebook1.png';
import google from '../../../images/Social/google-icon.png';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

  if (loading1 || loading2) {
    return <Loading></Loading>;
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleGithubLogin = async () => {
    await signInWithGithub();
  };

  if (user1 || user2) {
    navigate('/');
  }
  return (
    <div>
      <div>
        {loading1 || loading2 ? <p>Loading...</p> : ''}
        {error1 || error2 ? (
          <p className="alert alert-danger">
            Error: {error1?.message || error2?.message}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="bg-primary w-50" style={{ height: '1px' }}></div>
        <p className="mt-3 px-3">or</p>
        <div className="bg-primary w-50" style={{ height: '1px' }}></div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-primary w-100 mx-1"
          onClick={handleGoogleSignIn}
        >
          <img
            style={{ width: '25px' }}
            className="me-2 py-1"
            src={google}
            alt=""
          />
          Google Sign in
        </button>
        <button
          className="btn btn-outline-primary w-100 mx-1"
          onClick={handleGithubLogin}
        >
          <img
            style={{ width: '25px' }}
            className="me-2 py-1"
            src={facebook}
            alt=""
          />
          Github Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
