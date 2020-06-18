import React from 'react';
import Contact from "./contact/contact";
import './contactInfo.css';

const ContactInfo = () => {
    return (
        <div className={'contactInfoContainer'}>
            <Contact text={'maxim.fishman@outlook.com'}>
                <i className="fas fa-envelope fa-lg"/>
            </Contact>
            <Contact text={'+1 650 804 9204 / +44 (0) 74 644 59572'}>
                <i className="fas fa-mobile fa-lg"/>
            </Contact>
            <Contact text={'CA / London'}>
                <i className="fas fa-map-marker-alt fa-lg"/>
            </Contact>
            <Contact text={'https://www.linkedin.com/in/maxim-fishman/'}>
                <i className="fab fa-linkedin-in"/>
            </Contact>
            <Contact text={'https://github.com/max-fish'}>
                <i className="fab fa-github"/>
            </Contact>
        </div>
    )
};

export default ContactInfo;