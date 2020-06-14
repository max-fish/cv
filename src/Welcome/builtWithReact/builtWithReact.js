import React from 'react';
import './builtWithReact.css';

const BuiltWithReact = () => {
    return(
        <div className={'builtWithReactContainer'}>
            <i className="fab fa-react fa-lg"/>
            <div className={'builtWithReactText'}>built with ReactJS</div>
        </div>
    )
};

export default BuiltWithReact;