import React from 'react';

const InformationComponent = (props) => {
  return (
    <div className='alert alert-dismissible alert-info m-3  w-100'>
      <strong>{props.message}</strong>
    </div>
  );
};

export default InformationComponent;
