import React from 'react';

const SuccessComponent = ({ message }) => {
  return (
    <div className='alert alert-dismissible alert-success my-3'>{message}</div>
  );
};

export default SuccessComponent;
