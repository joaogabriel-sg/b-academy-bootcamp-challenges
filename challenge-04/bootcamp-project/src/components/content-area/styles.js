import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.main`
  grid-area: content;
  padding: 32px 0 32px 24px;

  @media (max-width: 700px) {
    padding-left: 0;
  }

  > h2 {
    margin-bottom: 8px;
    color: var(--color-accent);
    opacity: 0;

    animation: ${show} 1s forwards ease;
    animation-delay: 0.5s;
  }

  > p {
    opacity: 0;
    animation: ${show} 1s forwards ease;
    animation-delay: 0.6s;
  }

  > h3 {
    margin-top: 24px;
    margin-bottom: 8px;
    opacity: 0;

    animation: ${show} 1s forwards ease;
    animation-delay: 0.7s;
  }

  > ul,
  > ol {
    opacity: 0;
    animation: ${show} 1s forwards ease;
    animation-delay: 0.8s;

    > li {
      color: var(--color-primary);

      & + li {
        margin-top: 8px;
      }
    }
  }
`;
