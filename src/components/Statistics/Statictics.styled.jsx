import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StatisticContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
  animation: ${appear} 0.5s ease-in-out;
`;

const StatItem = styled.li`
  display: flex;
  padding: 10px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  color: #fff;
  list-style: none;
  transition: width 0.3s ease-in-out;
`;

const StatValue = styled.p`
  margin: 0;
`;

export { StatisticContainer, StatItem, StatValue };
