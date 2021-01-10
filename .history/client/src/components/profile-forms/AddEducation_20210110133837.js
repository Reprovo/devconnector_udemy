import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} fron 'react-router-dom'
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddEducation = (props) => {
  return <div></div>;
};

AddEducation.propTypes = {};

export default connect(null, {addExperience}) (AddEducation);
