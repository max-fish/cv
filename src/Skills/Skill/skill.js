import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ iconClassname, title, description }) => {
    return(
    <div>
        <i className={iconClassname} />
        {title}
        {description}
    </div>
    );
};

Skill.propTypes = {
    iconClassname: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Skill;