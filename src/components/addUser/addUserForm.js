import AddUserFormController from './AddUserFormController';
import validation from './validationInformation';
import ErrorComponent from '../CommonUI/ErrorComponent';
const addUserForm = ({ submitForm }) => {
  const {
    onHandleChange,
    onSubmitHandler,
    values,
    errors
  } = AddUserFormController(submitForm, validation);

  return (
    <>
      <h3 className='text-center my-3'> Add User </h3>
      <form onSubmit={onSubmitHandler}>
        <div className='form-group row mb-0'>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={values.firstName}
              onChange={onHandleChange}
            />
            {errors.firstName && (
              <ErrorComponent message={errors.firstName}></ErrorComponent>
            )}
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              value={values.lastName}
              onChange={onHandleChange}
            />
            {errors.lastName && (
              <ErrorComponent message={errors.lastName}></ErrorComponent>
            )}
          </div>
        </div>
        <div className='form-group row mb-0'>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              className='form-control'
              id='age'
              name='age'
              placeholder='Please enter your age'
              value={values.age}
              onChange={onHandleChange}
            />
            {errors.age && (
              <ErrorComponent message={errors.age}></ErrorComponent>
            )}
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='gender'>Gender</label>

            <select
              name='gender'
              value={values.gender}
              onChange={onHandleChange}
              id='gender'
              className='custom-select'>
              <option value=''>Please select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            {errors.gender && (
              <ErrorComponent message={errors.gender}></ErrorComponent>
            )}
          </div>
        </div>
        <div className='form-group row mb-0'>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='address'>Address</label>
            <textarea
              className='form-control'
              id='address'
              name='address'
              rows='3'
              style={{ resize: 'none' }}
              value={values.address}
              onChange={onHandleChange}></textarea>
            {errors.address && (
              <ErrorComponent message={errors.address}></ErrorComponent>
            )}
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <label htmlFor='description'>Description</label>
            <textarea
              className='form-control'
              id='description'
              name='description'
              style={{ resize: 'none' }}
              value={values.description}
              onChange={onHandleChange}
              rows='3'></textarea>
          </div>
        </div>
        <div className='col-12 my-2'>
          <button type='submit' className='btn btn-primary float-right'>
            Submit
          </button>
        </div>
      </form>
      <div className='clearfix'></div>
    </>
  );
};

export default addUserForm;
