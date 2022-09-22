import React, { Component } from 'react';
import { Statistic } from './Statistics/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notifications';
import { Feedbacks } from './FeedBacks/Feedbacks';
interface IState{
  good: number,
  neutral: number,
  bad: number
}

export default class App extends Component<unknown, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonIncrement =(event: React.MouseEvent<HTMLButtonElement>) :void =>{
    const { name } = event.target as EventTarget & { name: keyof IState }

    this.setState(ps => {return {[name]: ps[name] + 1} as Readonly<IState>});
  }

  countTotalFeedback = ():number => {
    return Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  };
  countPositiveFeedbackPercentage = (): number => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };
  render():JSX.Element {
    let total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <Section title="Please leave us a feedback">
          <Feedbacks
            options={Object.keys(this.state)}
            buttonIncrement={this.buttonIncrement}
          ></Feedbacks>
        </Section>
        <Section title="Review Statistic">
          {total === 0 ? (
            <Notification message="No feedback was given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveStats={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </section>
    );
  }
}
