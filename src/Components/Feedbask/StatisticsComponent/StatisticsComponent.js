import PropTypes from 'prop-types';

import Notification from '../Notification';

import s from './Statistics.module.scss'
const Statistics = ({ good, neutral, bad, total, positivePersantege }) => {
    return (
        <>
            {total > 0 && (
                <ul className={s.feedbask_list}>
                    <li className={s.feedbask_item}>Good: {good}</li>
                    <li className={s.feedbask_item}>Neutral: {neutral}</li>
                    <li className={s.feedbask_item}>Bad: {bad}</li>
                    <li className={s.feedbask_item}>Total: {total}</li>
                    <li className={s.feedbask_item}>Positive Persantage: {positivePersantege} %</li>
                </ul>
            )}
            {total === 0 && <Notification message='No feedbask given' />}
        </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
export default Statistics;