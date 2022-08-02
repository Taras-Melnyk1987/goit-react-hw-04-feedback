import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStateOptions = () => Object.keys(this.state);
  getStateValues = () => Object.values(this.state);

  handleIncrementReview = e => {
    const currenOption = e.target.textContent;
    this.setState(prevState => {
      return { [currenOption]: prevState[currenOption] + 1 };
    });
  };

  countTotalFeedback() {
    return this.getStateValues().reduce((acc, feed) => acc + feed, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const labels = this.getStateOptions();
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={labels}
            onLeaveFeedback={this.handleIncrementReview}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeeds={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}