import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, totalFeeds, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem key="good">Good: {good}</StatisticsItem>
      <StatisticsItem key="neutral">neutral: {neutral}</StatisticsItem>
      <StatisticsItem key="bad">bad: {bad}</StatisticsItem>
      <StatisticsItem key="total">total: {totalFeeds}</StatisticsItem>
      <StatisticsItem key="percentage">
        Positive feedbacks: {positivePercentage}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeeds: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;