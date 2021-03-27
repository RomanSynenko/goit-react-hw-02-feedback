import React from 'react';
import PropTypes from 'prop-types';


import s from './Section.module.scss';



const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={s.content}>{title}</h2>
            <div className={s.content_section}>{children}</div>
        </section>
    )
};

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};
export default Section;