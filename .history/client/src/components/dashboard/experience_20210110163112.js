import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experience }) => {
  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'></table>
    </Fragment>
  );
};

Experience.propTypes = {};

export default Experience;
