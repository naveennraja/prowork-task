import React from 'react';
import './Cards.css';
const CardComponent = ({ data }) => {
  return (
    <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 '>
      <div className='card my-3 border-primary'>
        <div className='card-body'>
          <h4 className='card-title mb-4 text-capitalize'>
            <i className='fas fa-user mr-2'></i>
            {data.firstName} {data.lastName}
          </h4>
          <h6 className='card-subtitle mb-2 text-muted mh-50"'>
            <i className='fas fa-map-marker-alt mr-2 text-primary'></i>
            {data.address}
          </h6>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <p className='float-left'>
                <strong>Age: </strong>
                {data.age}
              </p>
              <p className='float-right'>
                <i
                  className='fa fa-genderless text-primary mr-2'
                  aria-hidden='true'></i>
                <strong>Gender: </strong>
                {data.gender}
              </p>
              <div className='clearfix'></div>
            </li>

            <li className='list-group-item'></li>
          </ul>
          <p className='card-text text-truncate' style={{ maxWidth: '350px' }}>
            <i className='fas fa-info-circle mr-2 text-primary'></i>
            <strong>Description: </strong>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
