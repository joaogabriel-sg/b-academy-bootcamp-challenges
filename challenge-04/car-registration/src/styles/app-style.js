import styled from 'styled-components';

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
