import React from 'react';
import PropTypes from 'prop-types';
import './section.css';

const Section = ({ children }) => {
    return(
        <div className={'section'}>
            {children}
        </div>
    )
};

export default Section;

Section.propTypes = {
  children: PropTypes.array
};