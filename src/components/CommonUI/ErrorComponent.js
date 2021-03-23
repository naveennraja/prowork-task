import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <div className='alert alert-dismissible alert-danger my-3 p-2'>
      <p className='mb-0'>{message}</p>
    </div>
  );
};

export default ErrorComponent;
