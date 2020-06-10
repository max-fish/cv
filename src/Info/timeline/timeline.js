import React from 'react';
import PropTypes from 'prop-types';
import withWrapper from "../wrapper/withWrapper";
import './timeline.css';

// eslint-disable-next-line react/display-name
const Timeline = React.forwardRef((props, ref) => {
    const Timeline = () => {
        return (
            <div className={'timeline'}>
                <div className={'line'}/>
                <div className={'initialDot'}/>
                <div ref={ref} className={'content'}>
                    {props.children}
                </div>
            </div>
        )
    };

    return <Timeline/>;
});

export default withWrapper(Timeline);

Timeline.propTypes = {
  children: PropTypes.array
};