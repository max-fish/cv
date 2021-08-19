import React from 'react';
import './builtWithReact.css';

const BuiltWithReact = () => {
    return (
        <div className={'builtWithReactContainer'}>
            <div className={'builtWithReactTextContainer'}>
                <i className="fab fa-react fa-lg"/>
                <div className={'builtWithReactText'}>built with ReactJS</div>
            </div>
            <a href={'https://github.com/max-fish/cv'} target={'_blank'} rel={'noopener noreferrer'} className={'viewSourceLink'}>view source</a>
        </div>
    )
};

export default BuiltWithReact;
