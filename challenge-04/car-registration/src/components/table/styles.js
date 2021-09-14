import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.table`
  width: 100%;
  margin: 48px 0;
  align-self: start;
  border-collapse: collapse;
  border-spacing: none;
  border: 1px solid var(--color-accent);

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  opacity: 0;
  animation: ${show} 1s 2.4s forwards ease;
`;

export const Head = styled.thead`
  background: var(--color-accent);
  border-bottom: 1px solid var(--color-accent);
`;

export const Row = styled.tr`
  @media (max-width: 1020px) {
    overflow: auto;
  }
`;

export const Title = styled.th`
  padding: 8px 0;
  color: var(--color-secondary);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Body = styled.tbody``;
