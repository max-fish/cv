import React, {useEffect, useRef} from 'react';
import './timeline.css';
import Entry from "./section/entry/entry";
import Subtitle from "./section/subtitle/subtitle";
import Section from "./section/section";

const Timeline = () => {
    const contentRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        console.log(contentRef.current.clientHeight);
        timelineRef.current.style.height = contentRef.current.clientHeight + 50 + 'px';
    }, []);

    return (
        <div ref={timelineRef} className={'timeline'}>
            <div className={'line'}/>
            <div className={'initialDot'}/>
            <div ref={contentRef} className={'content'}>
                <Section>
                    <Subtitle text={'Me'}/>
                    <div className={'aboutMe'}>Second-year college student with a passion for Java GUI as well as web
                        and cross-platform/native
                        mobile app development.
                    </div>
                </Section>
                <Section>
                    <Subtitle text={'Education'}/>
                    <Entry yearInterval={'2018 -PRESENT'} title={'King\'s College London'}
                           description={'Computer Science Msci'}/>
                    <Entry yearInterval={'2014 -2018'} title={'Henry M. Gunn High School'}/>
                </Section>
                <Section>
                    <Subtitle text={'Experience'}/>
                    <Entry yearInterval={'2019'} title={'Android App Development Intern'} description={''}/>
                    <Entry yearInterval={'2018'} title={'Programmer'} description={''}/>
                </Section>
            </div>
        </div>
    )
};

export default Timeline;