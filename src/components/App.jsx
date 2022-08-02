import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };
  const optionsKeys = getOptionsKeys();
  const optionsValues = getOptionsValues();
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  const handleIncrementReview = e => {
    const currenOption = e.target.textContent;

    if (currenOption === 'good') {
      setGood(prevState => prevState + 1);
    } else if (currenOption === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  function getOptionsKeys() {
    return Object.keys(options);
  }

  function getOptionsValues() {
    return Object.values(options);
  }

  function countTotalFeedback() {
    return optionsValues.reduce((acc, feed) => acc + feed, 0);
  }

  function countPositiveFeedbackPercentage() {
    return Math.floor((good * 100) / total);
  }

  return (
    <div>
      <Section title="Please leave feedback!">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={handleIncrementReview}
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