import React from 'react';
import './timelineEntry.css';

const TimelineEntry = () => {
    return (
        <div className={'entry'}>
            <div className={'entryDot'}/>
            <div className={'entryText'}>
                <p className={'entryTitle'}>title</p>
                <p className={'entryDescription'}>description</p>
            </div>
        </div>
    );
};

export default TimelineEntry;