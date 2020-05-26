import React from 'react';
import './timeline.css';
import Entry from "./entry/entry";
import Subtitle from "./subtitle/subtitle";

const Timeline = () => {
    return (
        <div className={'timeline'}>
            <div className={'line'}/>
            <div className={'initialDot'}/>
            <div className={'content'}>
                <Subtitle text={'Education'}/>
                <Entry/>
            </div>
        </div>
    )
};

export default Timeline;