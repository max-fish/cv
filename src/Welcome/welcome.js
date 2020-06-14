import React from 'react';
import './welcome.css';
import Name from "./Name/name";
import ContactInfo from "./contactInfo/contactInfo";
import BuiltWithReact from "./builtWithReact/builtWithReact";

const Welcome = () => {
    return (
        <div className={'welcomeContainer'}>
            <div className={'me'}>
                <Name/>
                <ContactInfo/>
            </div>
            <BuiltWithReact/>
        </div>
    )
};

export default Welcome;