import React, { useState } from 'react';
import CardComponent from './CommonUI/CardComponent';
import InformationComponent from './CommonUI/InformationComponent';

const ShowUser = () => {
  const storageData = JSON.parse(localStorage.getItem('ProworkUsers')) || {};
  const [userList] = useState(storageData);
  return (
    <div className='row'>
      {Object.keys(userList).length === 0 ? (
        <InformationComponent
          message={'Heads up! Please add new users to see the list'}
        />
      ) : (
        userList.map((user, idx) => (
          <CardComponent key={user.firstName + idx} data={user}></CardComponent>
        ))
      )}
    </div>
  );
};

export default ShowUser;
