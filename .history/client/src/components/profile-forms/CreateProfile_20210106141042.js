import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  return <div></div>;
};

CreateProfile.propTypes = {};
const [formData, setFormData] = useState({
  company: '',
  website: '',
  locations: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: '',
});

export default CreateProfile;
