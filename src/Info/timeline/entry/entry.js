import React from 'react';
import './entry.css';

const Entry = () => {
    return (
        <div className={'entry'}>
            <div className={'entryYear'}>2018 -PRESENT</div>
            <div className={'entryDot'}/>
            <div className={'entryText'}>
                <div className={'entryTitle'}>title</div>
                <div className={'entryDescription'}>description</div>
            </div>
        </div>
    );
};

export default Entry;