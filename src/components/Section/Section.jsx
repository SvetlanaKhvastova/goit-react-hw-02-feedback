import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.tagInner}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.defaultProps = {
  children: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
