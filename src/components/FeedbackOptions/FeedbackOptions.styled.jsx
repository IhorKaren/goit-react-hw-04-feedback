import styled from 'styled-components';

function setColor(name) {
  switch (name) {
    case 'good':
      return '#00b894';
    case 'neutral':
      return '#f1c40f';
    case 'bad':
      return '#e74c3c';
    default:
      return 'gray';
  }
}

const FeedbackOptionsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
`;

const FeedbackOption = styled.li`
  list-style: none;
`;

const Button = styled.button`
padding: 10px 20px;
  background-color: ${({ color }) => setColor(color)};
  border: 1px solid ${({ color }) => setColor(color)};
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
  border-color 200ms ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid ${({ color }) => setColor(color)};
    color: ${({ color }) => setColor(color)};
    }};
  }
`;

export { Button, FeedbackOptionsContainer, FeedbackOption };
