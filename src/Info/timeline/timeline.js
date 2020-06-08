import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './timeline.css';

const Timeline = ({ children }) => {
    const contentRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        timelineRef.current.style.height = contentRef.current.clientHeight + 50 + 'px';
        timelineRef.current.style.width = contentRef.current.clientWidth + 'px';
    }, []);

    return (
        <div ref={timelineRef} className={'timeline'}>
            <div className={'line'}/>
            <div className={'initialDot'}/>
            <div ref={contentRef} className={'content'}>
                {children}
            </div>
        </div>
    )
};

export default Timeline;

Timeline.propTypes = {
  children: PropTypes.array
};