import React from 'react';
import './timeline.css';
import TimelineEntry from "./timelineEntry/timelineEntry";

const Timeline = () => {
    return (
        <div className={'timeline'}>
            <div className={'line'}/>
            <div className={'initialDot'}/>
            <TimelineEntry/>
        </div>
    )
};

export default Timeline;