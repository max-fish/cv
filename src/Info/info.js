import React from 'react';
import Timeline from "./timeline/timeline";
import Section from "./timeline/section/section";
import Subtitle from "./timeline/section/subtitle/subtitle";
import Entry from "./timeline/section/entry/entry";
import './info.css';

const Info = () => {
    return (
        <div className={'infoContainer'}>
            <Timeline>
                <Section>
                    <Subtitle text={'Me'}/>
                    <div className={'aboutMe'}>Computer Science student and software engineer with a passion for Java GUIs as well as web
                        and cross-platform/native
                        mobile app development.
                    </div>
                </Section>
                <Section>
                    <Subtitle text={'Education'}/>
                    <Entry yearInterval={'2021 -NOW'} title={'Imperial College London'} description={'MSc Computing (Software Engineering)'} />
                    <Entry yearInterval={'2018 -2021'} title={'King\'s College London'}
                           description={'Computer Science BSc (Software Engineering), First Class Honours'}/>
                    <Entry yearInterval={'2014 -2018'} title={'Henry M. Gunn High School'} description={'AP Calculus BC: 5 / 5\nAP Computer Science: 4 / 5\nSAT II Math: 790 / 800'}/>
                </Section>
                <Section>
                    <Subtitle text={'Experience'}/>
                    <Entry yearInterval={'2020 -NOW'} title={'Web Developer, EatLocalVT'} description={'Maintaining and extending a Content Management System website for farms within the state of Vermont.'} />
                    <Entry yearInterval={'2019'} title={'Android App Development\nIntern, AB Soft Ukraine'} description={'Developed an app that sorts articles from NEWS API by source, date, category, and user query.\nhttps://github.com/max-fish/News'}/>
                    <Entry yearInterval={'2017'} title={'Programmer, Guzik Technical Enterprises USA'} description={'Wrote a Java GUI based parsing algorithm that enumerates errors embedded in hardware production files.'}/>
                </Section>
            </Timeline>
            <Timeline>
                <Section>
                    <Subtitle text={'Projects'}/>
                    <Entry yearInterval={'2021 -2022'} title={'FuelOpt'} description={'Designed and implemented a user interface for an app which help users find gas stations based on their preference to help tackle UK fuel shortages. I also worked with the API team to ensure user queries were supplied with appriorate data.\n App for Android: https://install.appcenter.ms/users/gmnapster/apps/fuelopt/distribution_groups/fuelopt%20app%20testers\nRepo: https://github.com/mchara01/FuelOpt'} />
                    <Entry yearInterval={'2020 -NOW'} title={'AcornVT'} description={'Consulting the mobile app team and developing a content management system, which provides users with locations of farms on an interactive map.\niOS: https://apps.apple.com/us/app/eat-local-vt/id1527926112\nCMS: https://acornvt-261b9.web.app/'}/>
                    <Entry yearInterval={'2020 -2021'} title={'COVID-19 Contact Tracing App'} description={'Designed and built a track-and-trace mobile app for my Bachelor\'s dissertation. It uses Google Nearby Services for detecting other devices and Google Firebase for storing contacts and sending exposure alerts.'} />
                    <Entry yearInterval={'2020'} title={'NHS Pediatric Liver Center Website'}
                           description={'Led the front-end team to develop a comfortable learning experience for patients with chronic liver conditions by supervising all design decisions. Technologies used: MERN stack, MongoDB, tested with Jest / Puppeteer.\nhttps://nhs-liver-disease.herokuapp.com'}/>
                    <Entry yearInterval={'2019 -NOW'} title={'Social Media App'} description={'Building a cross-platform social media app with cutting-edge Neumorphic design that attempts to connect people by their passion for exploring the world. Currently being written in Flutter with Google Firestore for the back-end.'}/>
                    <Entry yearInterval={'2019 -2020'} title={'Kanban Board GUI'} description={'Managed UI / UX by implementing industry-standard Google Material Design of a JavaFX GUI that is handy for keeping track of team progress in an agile fashion. Verified by automated JUnit / TestFX testing.\nhttps://github.com/max-fish/kanban-board-gui'}/>
                </Section>
            </Timeline>
        </div>
    )
};

export default Info;
