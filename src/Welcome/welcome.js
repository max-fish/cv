import React from 'react';
import './welcome.css';
import Name from "./Name/name";
import ContactInfo from "./contactInfo/contactInfo";

const Welcome = () => {
    return (
        <div className={'welcomeContainer'}>
            <div className={'me'}>
                <Name/>
                <ContactInfo/>
            </div>
        </div>
    )
};

export default Welcome;