import { useState, useEffect } from 'react';
const initialVal = {
  firstName: '',
  lastName: '',
  gender: '',
  age: '',
  address: '',
  description: ''
};
const AddUserFormController = (callback, validation) => {
  const [values, setValues] = useState(initialVal);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const userList = localStorage.getItem('ProworkUsers');
      if (userList !== null) {
        const allUser = [...JSON.parse(userList), values];
        localStorage.setItem('ProworkUsers', JSON.stringify(allUser));
      } else {
        localStorage.setItem('ProworkUsers', JSON.stringify([values]));
      }
      callback();
      setValues(initialVal);
    }
  }, [errors]);

  return { onHandleChange, onSubmitHandler, values, errors };
};

export default AddUserFormController;
