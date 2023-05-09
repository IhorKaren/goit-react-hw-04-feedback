import PropTypes from 'prop-types';
import { StatisticContainer, StatItem, StatValue } from './Statictics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticContainer>
      <StatItem color="#00b894">
        <StatValue>Good: {good}</StatValue>
      </StatItem>
      <StatItem color="#f1c40f">
        <StatValue>Neutral: {neutral}</StatValue>
      </StatItem>
      <StatItem color="#e74c3c">
        <StatValue>Bad: {bad}</StatValue>
      </StatItem>
      <StatItem color="#20A6C4">
        <StatValue>Total: {total()}</StatValue>
      </StatItem>
      <StatItem color="#9E1CC3">
        <StatValue>Positive feedback: {positivePercentage()}%</StatValue>
      </StatItem>
    </StatisticContainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
