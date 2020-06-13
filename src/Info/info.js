import React from 'react';
import Timeline from "./timeline/timeline";
import Section from "./timeline/section/section";
import Subtitle from "./timeline/section/subtitle/subtitle";
import Entry from "./timeline/section/entry/entry";
import {PieChart} from 'react-minimal-pie-chart';
import './info.css';

const data = [
    {title: 'Java (24001)', value: 24001, color: '#b07219'},
    {title: 'Javascript (72297)', value: 72297, color: '#f1e05a'},
    {title: 'Dart (5914)', value: 5914, color: '#00b4ab'},
    {title: 'Python (501)', value: 501, color: '#3572a5'},
    {title: 'C++ (3263)', value: 3263, color: '#f34b7d'},
    {title: 'Scala (3066)', value: 3066, color: '#c22d40'}
];

const Info = () => {
    return (
        <div className={'infoContainer'}>
            <Timeline>
                <Section>
                    <Subtitle text={'Me'}/>
                    <div className={'aboutMe'}>Second-year college student with a passion for Java GUI as well as web
                        and cross-platform/native
                        mobile app development.
                    </div>
                </Section>
                <Section>
                    <Subtitle text={'Education'}/>
                    <Entry yearInterval={'2018 -NOW'} title={'King\'s College London'}
                           description={'Computer Science Msci'}/>
                    <Entry yearInterval={'2014 -2018'} title={'Henry M. Gunn High School'}/>
                </Section>
                <Section>
                    <Subtitle text={'Experience'}/>
                    <Entry yearInterval={'2019'} title={'Android App Development\nIntern'} description={''}/>
                    <Entry yearInterval={'2018'} title={'Programmer'} description={''}/>
                </Section>
            </Timeline>
            <Timeline>
                <Section>
                    <Subtitle text={'Line Changes'}/>
                    <PieChart
                        style={{height: 'fit-content', width: '320px', marginLeft: '20px'}}
                        data={data}
                        label={({dataEntry}) => dataEntry.title}
                        labelStyle={(index) => ({
                            fill: data[index].color,
                            fontSize: '7px',
                            fontFamily: 'Nunito, sans-serif',
                            fontWeight: '300',
                            wordBreak: 'break-word',
                            wordWrap: 'break-word',
                            width: '2px',
                            borderStyle: 'dashed'
                        })}
                        labelPosition={110}
                        lineWidth={15}
                        radius={40}
                        paddingAngle={5}
                        startAngle={PieChart.defaultProps.startAngle}
                        viewBoxSize={PieChart.defaultProps.viewBoxSize}
                        center={PieChart.defaultProps.center}
                        animationDuration={PieChart.defaultProps.animationDuration}
                        animationEasing={PieChart.defaultProps.animationEasing}
                    />
                </Section>
                <Section>
                    <Subtitle text={'Projects'}/>
                    <Entry yearInterval={'2019'} title={'NHS Pediatric Liver Center Website'}
                           description={'Beautiful front-end for an easy learning experience for patients with chronic liver conditions; secure back-end for editing content.\nhttps://nhs-liver-disease.herokuapp.com'}/>
                    <Entry yearInterval={'2018 -2019'} title={'Kanban Board GUI Desktop App'} description={''}/>
                </Section>
            </Timeline>
        </div>
    )
};

export default Info;