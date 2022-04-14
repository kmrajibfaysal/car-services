import React from 'react';
import google from '../../../images/Social/google-icon.png';
import facebook from '../../../images/Social/facebook1.png';
const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="bg-primary w-50" style={{ height: '1px' }}></div>
        <p className="mt-3 px-3">or</p>
        <div className="bg-primary w-50" style={{ height: '1px' }}></div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary w-100 mx-1">
          <img
            style={{ width: '25px' }}
            className="me-2 py-1"
            src={google}
            alt=""
          />
          Google Sign in
        </button>
        <button className="btn btn-outline-primary w-100 mx-1">
          <img
            style={{ width: '25px' }}
            className="me-2 py-1"
            src={facebook}
            alt=""
          />
          Facebook Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
