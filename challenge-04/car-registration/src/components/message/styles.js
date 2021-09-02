import styled, { keyframes } from 'styled-components';

const toggleMessage = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(calc(100% + 10px));
  }
  10%, 90% {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%) translateY(calc(100% + 10px));

  background: var(--color-accent);
  width: 300px;
  padding: 12px;

  text-align: center;
  color: var(--color-secondary);

  animation: ${toggleMessage} 2.8s cubic-bezier(0.95, 0.05, 0.795, 0.035);
`;
