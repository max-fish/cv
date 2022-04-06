import React from 'react';
import PropTypes from 'prop-types';
import Linkify from "react-linkify";
import './contact.css';

const Contact = ({children, text}) => {
    return (
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target={'blank'} href={decoratedHref} key={key} style={{color: 'white', textDecoration: 'none'}}>
                {decoratedText}
            </a>
        )}>
            <div className={'contactContainer'}>
                <div className={'contactIcon'}>
                    {children}
                </div>
                <div className={'contactText'}>{text}</div>
            </div>
        </Linkify>
    )
};

export default Contact;

Contact.propTypes = {
    children: PropTypes.array,
    text: PropTypes.string
};

