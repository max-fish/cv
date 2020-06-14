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
                    <Entry yearInterval={'2014 -2018'} title={'Henry M. Gunn High School'} description={'AP Calculus BC: 5\nAP Computer Science: 4\nSAT II Math: 790'}/>
                </Section>
                <Section>
                    <Subtitle text={'Experience'}/>
                    <Entry yearInterval={'2019'} title={'Android App Development\nIntern, AB Soft Ukraine'} description={'Made an app that sorts articles from NEWS API by source, date, category, and user query.\nhttps://github.com/max-fish/News'}/>
                    <Entry yearInterval={'2018'} title={'Programmer, Guzik Technical Enterprises'} description={'Wrote a Java GUI based parsing algorithm that enumerates errors embedded in hardware production files.'}/>
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
                    <Entry yearInterval={'2018 -2019'} title={'Kanban Board GUI'} description={'Gradle-packaged JavaFX GUI that is handy for keeping track of team progress in an agile fashion. Verified by automated junit testing.\nhttps://github.com/max-fish/kanban-board-gui'}/>
                    <Entry yearInterval={'2018'} title={'Airbnb GUI'} description={'JavaFX GUI that organizes properties into a heat map and illustrates their name, location, price, and image, which is delivered by Bing Maps API\nhttps://github.com/max-fish/Airbnb-gui'}/>
                </Section>
            </Timeline>
        </div>
    )
};

export default Info;