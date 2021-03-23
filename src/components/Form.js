import React, { useState } from 'react';
import AddUserForm from './addUser/addUserForm';
import SuccessComponent from './CommonUI/SuccessComponent';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <AddUserForm submitForm={submitForm}></AddUserForm>
      {!isSubmitted ? (
        ''
      ) : (
        <SuccessComponent
          message={'You have added a new user.'}></SuccessComponent>
      )}
    </>
  );
};

export default Form;
