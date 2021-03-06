import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ name, onLeaveFeedback }) => {
  return (
    <>
      <button
        type="button"
        name={name}
        className={s.button}
        onClick={onLeaveFeedback}
      >
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
