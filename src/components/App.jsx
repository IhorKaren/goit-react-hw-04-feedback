import { useState } from 'react';
import { Container } from './Container/Container.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  let total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  const handleAddFeedback = e => {
    const { value } = e.target;

    switch (value) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleAddFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}
