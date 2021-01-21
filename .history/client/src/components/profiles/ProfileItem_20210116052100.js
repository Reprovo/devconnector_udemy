import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div classname='profile bg -light'>
      <img src={avatar} alt='' className='round-img' />
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
