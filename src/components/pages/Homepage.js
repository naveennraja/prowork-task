import React from 'react';

const Homepage = () => {
  return (
    <div className='jumbotron'>
      <h4 className='display-6'>System test for: ReactJS Developer !</h4>
      <p className='lead'>
        As part of our application process, we'd like to see what you can
        produce by giving you a small assignment. You should complete this
        assignment and send the source code to us by
        <strong> 24th March (Wednesday).</strong>
      </p>
      <hr className='my-4' />
      <h4 className='display-6'>Task Requirements!</h4>
      <p className='lead'>
        We would like you to create a Responsive User Manager Feature. The
        features include as below:
      </p>
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Navigation to different Components.
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Create Add User Form to submit data.
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Display User List
          <i className='fas fa-check text-success'></i>
        </li>
      </ul>

      <hr className='my-4' />
      <h4 className='display-6'>Data Management !</h4>
      <p className='lead'>
        Use local storage or NoSQL DB, either will suffice. Data must persist on
        page refresh.
      </p>
      <p>
        <strong>
          Have used localStorage . Data will persist on local storage.
        </strong>
        <i className='fas fa-check text-success'></i>
      </p>
      <hr className='my-4' />
      <h4 className='display-6'>Task Requirements!</h4>
      <p className='lead'>
        We would like you to create a Responsive User Manager Feature. The
        features include as below:
      </p>
      <ul className='list-group'>
        <li className='list-group-item d-flex  align-items-center'>
          First Name
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
        <li className='list-group-item d-flex  align-items-center'>
          Last Name
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
        <li className='list-group-item d-flex  align-items-center'>
          <span>Gender</span>
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
        <li className='list-group-item d-flex  align-items-center'>
          <span>Age </span>
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
        <li className='list-group-item d-flex  align-items-center'>
          <span>Address</span>
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
        <li className='list-group-item d-flex  align-items-center'>
          <span>Description</span>
          <span className='mx-2 badge badge-primary badge-pill'>String</span>
        </li>
      </ul>

      <hr className='my-4' />
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Implement the component-based UI development (Functional/Class
          components)
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Follow the good coding standards and best practices
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Use ES6 and latest React features
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Use any styling tools you desire, e.g. sass, styled-components, UI
          frameworks and libraries to create app UI and handle responsiveness
          appropriately.
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Demonstrate usage of React Hooks.
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Optional Bonus: Feel free to add further functionality as desired.
          <i className='fas fa-check text-success'></i>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Optional Bonus: Deploy App to a Host
          <i className='fas fa-check text-success'></i>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
