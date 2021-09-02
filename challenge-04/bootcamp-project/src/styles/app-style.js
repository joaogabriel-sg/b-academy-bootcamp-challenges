import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 8px;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    'header header'
    'menu menu'
    'sidebar content'
    'footer footer';

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
