import React from 'react';
import PropTypes from 'prop-types';
import './entry.css';

const Entry = ({ yearInterval, title, description }) => {
    return (
        <div className={'entry'}>
            <div className={'entryYear'}>{yearInterval}</div>
            <div className={'entryDot'}/>
            <div className={'entryText'}>
                <div className={'entryTitle'}>{title}</div>
                <div className={'entryDescription'}>{description}</div>
            </div>
        </div>
    );
};

export default Entry;

Entry.propTypes = {
  yearInterval: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};