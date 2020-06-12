import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import './entry.css';

const Entry = ({ yearInterval, title, description }) => {
    return (
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target={'blank'} href={decoratedHref} key={key} style={{color: 'yellow', textDecoration: 'none'}}>
                {decoratedText}
            </a>
        )}>
            <div className={'entry'}>
                <div className={'entryYear'}>{yearInterval}</div>
                <div className={'entryDot'}/>
                <div className={'entryText'}>
                    <div className={'entryTitle'}>{title}</div>
                    <div className={'entryDescription'}>{description}</div>
                </div>
            </div>
        </Linkify>
    );
};

export default Entry;

Entry.propTypes = {
    yearInterval: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};