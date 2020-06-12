import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';

const Contact = ({children, text}) => {
    return (
        <div className={'contactContainer'}>
            <div className={'contactIcon'}>
            {children}
            </div>
            <div className={'contactText'}>{text}</div>
        </div>
    )
};

export default Contact;

Contact.propTypes = {
    children: PropTypes.array,
    text: PropTypes.string
};

