import PropTypes from 'prop-types';
import {
  Button,
  FeedbackOptionsContainer,
  FeedbackOption,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      {options.map(name => (
        <FeedbackOption key={name}>
          <Button key={name} color={name} onClick={() => onLeaveFeedback(name)}>
            {name}
          </Button>
        </FeedbackOption>
      ))}
    </FeedbackOptionsContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
