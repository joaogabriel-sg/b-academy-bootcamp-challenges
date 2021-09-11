import styled, { keyframes } from 'styled-components';

export const Container = styled.aside`
  grid-area: sidebar;
  height: 100%;
  padding-top: 32px;
`;

export const Content = styled.div`
  position: sticky;
  top: 16px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: 24px;
`;

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Item = styled.li`
  opacity: 0;
  animation: ${show} 1s forwards ease;
  animation-delay: ${({ delayTime }) => `${delayTime * 0.2}s`};

  & + & {
    margin-top: 16px;
  }
`;

export const PostLink = styled.a`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: var(--color-primary);

  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }

  &::before {
    content: '';
    display: block;

    background: var(--color-accent);
    width: 12px;
    height: 2px;
    margin-right: 8px;
  }
`;

export const Buttons = styled.div`
  opacity: 0;
  animation: ${show} 1s forwards ease;
  animation-delay: 0.5s;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
