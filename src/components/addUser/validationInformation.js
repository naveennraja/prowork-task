export default function validation(values) {
  let errors = {};
  if (values.firstName.length < 1) {
    errors.firstName = 'First Name cannot be empty';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty';
  }
  //Age
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age)) {
    errors.age = 'Age should be in number';
  }
  if (!values.gender) {
    errors.gender = 'Please select Gender';
  }
  if (!values.address) {
    errors.address = 'Address cannot be empty';
  }

  return errors;
}
