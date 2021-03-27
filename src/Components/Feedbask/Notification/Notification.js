import PropTypes from 'prop-types';

import s from './Notification.module.scss';
const Notification = ({ message }) => <p className={s.notification}>{message}</p>;

Notification.prototype = {
    message: PropTypes.string.isRequired,
}
export default Notification;