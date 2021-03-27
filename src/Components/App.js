import React, { Component } from "react";

import Section from "./Feedbask/Section";
import FeedbaskOptions from './Feedbask/FeedbaskOptions';
import { FEEDBASK_OPTIONS } from '../data/costants';
import Statistics from './Feedbask/StatisticsComponent';

import s from './ContainerStyle.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  hendlerFeedbask = ({ target }) => {
    const { feedbask } = target.dataset;
    this.setState((prevState) => ({ [feedbask]: prevState[feedbask] + 1 }));
  }
  countTotoalFeedbask = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }
  countPositivePersantege = () => {
    const { good } = this.state;
    const total = this.countTotoalFeedbask();
    return total ? Math.round((good / total) * 100) : 0;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotoalFeedbask();
    const positivePersantege = this.countPositivePersantege();
    return (
      <div className={s.container}>
        <Section title='Please leave feedback'>
          <FeedbaskOptions options={FEEDBASK_OPTIONS} onLeaveFeedbask={this.hendlerFeedbask} />
        </Section>
        <Section title='Statistics' >
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePersantege={positivePersantege} />
        </Section>
      </div>
    )
  };
}
export default App;
