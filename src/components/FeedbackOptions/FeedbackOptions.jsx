import React from 'react';
// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from './Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);

  return (
    <div className={s.wraper}>
      {optionsBtn.map(el => {
        return <Button name={el} key={el} onLeaveFeedback={onLeaveFeedback} />;
      })}
    </div>
  );
};

export default FeedbackOptions;
