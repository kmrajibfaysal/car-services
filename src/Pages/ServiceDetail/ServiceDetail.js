import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="my-4 w-50 mx-auto">
      <h2 className="text-center">WelCome to Service Detail: {serviceId}</h2>
      <div className="text-center mt-4">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout...</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
