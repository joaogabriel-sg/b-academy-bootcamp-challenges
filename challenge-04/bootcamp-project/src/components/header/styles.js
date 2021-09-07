import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 64px;
  }
`;

export const Container = styled.header`
  grid-area: header;
  position: relative;
  padding: 16px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 8px;
  }

  > h1 {
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      background: var(--color-accent);
      width: 64px;
      height: 4px;
      margin: 0 8px;
      display: block;

      animation: ${animate} 1s ease;
    }
  }
`;
