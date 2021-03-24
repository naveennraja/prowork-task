import React from 'react';

const InformationComponent = ({ message }) => {
  return (
    <div className='alert alert-dismissible alert-info m-3  w-100'>
      <strong>{message}</strong>
    </div>
  );
};

export default InformationComponent;
