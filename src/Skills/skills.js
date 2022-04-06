import React from 'react';
import Skill from './Skill/skill';

const Technologies = () => {
    return(
    <div className={'technologiesContainer'}>
        <Skill iconClassname={'fab fa-react'} title={'React'} description={'4 projects'} />
    </div>
    );
};

export default Technologies;