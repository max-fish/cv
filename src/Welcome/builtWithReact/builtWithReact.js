import React from 'react';
import './builtWithReact.css';

const BuiltWithReact = () => {
    return (
        <a href={'https://github.com/max-fish/cv'} target={'_blank'} rel={'noopener noreferrer'} className={'builtWithReactContainer'}>
                <i className="fab fa-react fa-lg"/>
                <div className={'builtWithReactText'}>built with ReactJS</div>
        </a>
    )
};

export default BuiltWithReact;