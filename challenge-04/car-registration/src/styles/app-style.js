import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  padding: 48px 8px;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(250px, 350px) 1fr;
  gap: 48px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Table = styled.table`
  width: 100%;
  align-self: start;
  border-collapse: collapse;
  border-spacing: none;

  opacity: 0;
  animation: ${show} 1s forwards ease;
  animation-delay: 1.4s;

  > thead {
    border-bottom: 1px solid var(--color-accent);

    > tr th {
      padding-bottom: 8px;
    }
  }

  @media (max-width: 1020px) {
    display: block;
    overflow: scroll;
  }
`;
