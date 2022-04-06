import React from 'react';
import './welcome.css';
import Name from "./Name/name";
import ContactInfo from "./contactInfo/contactInfo";
import BuiltWithReact from "./builtWithReact/builtWithReact";
import Subtitle from "../Info/timeline/section/subtitle/subtitle";
import {PieChart} from "react-minimal-pie-chart";
import Section from "../Info/timeline/section/section";
import Timeline from "../Info/timeline/timeline";

const data = [
    {title: 'Java (24001)', value: 24001, color: 'brown'},
    {title: 'JS (72297)', value: 72297, color: '#9400D3'},
    {title: 'Dart (5914)', value: 5914, color: 'blue'},
    {title: 'Python (501)', value: 501, color: 'black'},
    {title: 'C++ (3263)', value: 3263, color: 'deeppink'},
    {title: 'Scala (3066)', value: 3066, color: 'green'}
];

const Welcome = () => {
    return (
        <div className={'welcomeContainer'}>
            <div className={'me'}>
                <Name/>
                <ContactInfo/>
            </div>
            <Timeline>
            <Section>
                <Subtitle text={'Line Changes'}/>
                <PieChart
                    style={{height: 'fit-content', width: '320px', marginLeft: '20px'}}
                    data={data}
                    label={({dataEntry}) => dataEntry.title}
                    labelStyle={(index) => ({
                        fill: data[index].color,
                        fontSize: '8px',
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: '700',
                        wordBreak: 'break-word',
                        wordWrap: 'break-word',
                        width: '2px',
                    })}
                    labelPosition={110}
                    lineWidth={15}
                    radius={50}
                    paddingAngle={5}
                />
                <div style={{marginLeft: '35px', fontFamily: 'Nunito, sans-serif', fontSize: 'small', wordWrap: 'break-word'}}>*values are determined by line additions + subtractions, which are tracked by Github Insights</div>
            </Section>
            </Timeline>
            <BuiltWithReact/>
        </div>
    )
};

export default Welcome;
