import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
