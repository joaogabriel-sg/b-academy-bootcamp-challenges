import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  padding: 0px 8px;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
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
  margin: 48px 0;
  align-self: start;
  border-collapse: collapse;
  border-spacing: none;
  border: 1px solid var(--color-accent);

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  opacity: 0;
  animation: ${show} 1s 2.4s forwards ease;

  > thead {
    background: var(--color-accent);
    border-bottom: 1px solid var(--color-accent);

    > tr th {
      padding: 8px 0;
      color: var(--color-secondary);

      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 1020px) {
    display: block;
    overflow: auto;
  }
`;
