import styled, { keyframes } from 'styled-components';

export const Container = styled.nav`
  grid-area: menu;
  padding: 16px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style-type: none;
`;

const showItem = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  opacity: 0;
  animation: ${showItem} 1s ease forwards;
  animation-delay: ${({ delayTime }) => `${+delayTime * 0.2}s`};

  & + & {
    margin-left: 24px;
  }

  &::after {
    content: '';
    display: block;

    background: var(--color-accent);
    width: 0%;
    height: 2px;
    margin-top: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Link = styled.a`
  display: block;
  padding: 0 8px;

  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-accent);
`;
