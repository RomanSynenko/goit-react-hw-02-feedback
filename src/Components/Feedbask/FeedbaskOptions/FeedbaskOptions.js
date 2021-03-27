import PropTypes from 'prop-types';

import s from './Feedbask.module.scss'

const FeedbaskButtom = ({ feedbask, onLeaveFeedbask }) => {
    return (
        <button className={s.feedbask_buttom} key={feedbask} type='button' data-feedbask={feedbask} onClick={onLeaveFeedbask}>
            {feedbask}
        </button>
    )
};

const FeedbaskOptions = ({ options, onLeaveFeedbask }) => {
    return options.map((option) => <FeedbaskButtom key={option} feedbask={option} onLeaveFeedbask={onLeaveFeedbask} />)
}
FeedbaskOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedbask: PropTypes.func.isRequired,
}
export default FeedbaskOptions;