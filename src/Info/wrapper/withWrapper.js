import React, { useEffect, useRef } from 'react';
import './withWrapper.css';

const withWrapper = (ComponentToBeWrapped) => {
    const WithWrapper = (props) => {
        const wrapperRef = useRef(null);
        const contentRef = useRef(null);

        useEffect(() => {
           wrapperRef.current.style.height = contentRef.current.clientHeight + 50 + 'px';
           wrapperRef.current.style.width = contentRef.current.clientWidth + 'px';
        }, []);

        return(
            <div className={'wrapper'} ref={wrapperRef}>
                <ComponentToBeWrapped ref={contentRef} {...props} />
            </div>
        )
    };

    return WithWrapper;
};

export default withWrapper;