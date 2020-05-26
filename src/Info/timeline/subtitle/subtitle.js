import React from 'react';
import PropTypes from 'prop-types';
import './subtitle.css';

const Subtitle = ({ text }) => {
  return(
      <div className={'subtitle'}>{text}</div>
  )
};

export default Subtitle;

Subtitle.propTypes = {
  text: PropTypes.string
};



