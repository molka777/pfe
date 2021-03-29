import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rate from '../layout/Rate';

import { faHeart, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
const Experience = ({ experience }) => {
  return (
    <div>
      <div className='col' style={{ marginTop: '1%' }}>
        <div className='card shadow-sm'>
          <img
            src='https://image.freepik.com/free-photo/front-view-woman-playing-guitar_23-2148243323.jpg'
            width='100%'
            height='100%'
            alt='...'
          />
          <div className='card-body'>
            <p
              className='card-text '
              style={{ marginRight: '46%', marginLeft: '2%' }}
            >
              {experience.title}
            </p>

            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Link
                  to={`/experience/${experience._id}`}
                  className='btn btn-sm btn-outline-secondary'
                >
                  Consulter
                </Link>

                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Participer
                </button>
              </div>
              <div>
                <small className='text-muted'>{experience.prix} TND</small>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div style={{ marginLeft: '6%' }}>
              <Rate />
            </div>
            <FontAwesomeIcon
              style={{ color: 'red', marginRight: '5%' }}
              icon={faHeart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
