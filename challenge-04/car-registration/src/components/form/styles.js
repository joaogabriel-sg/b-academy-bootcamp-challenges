import styled, { keyframes } from 'styled-components';

const animateHeight = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 100%;
  }
`;

export const Container = styled.aside`
  background: var(--color-primary);
  max-height: 0;
  padding: 48px 12px 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animateHeight} 1.2s forwards ease;

  @media (max-width: 800px) {
    background: var(--color-secondary);
  }
`;

export const Content = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 16px;
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 48px;
  margin-bottom: 1.6rem;

  opacity: 0;
  animation: ${fade} 0.8s 1.2s forwards ease;
`;

const toRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-12px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Title = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  font-size: 32px;
  color: var(--color-secondary);

  opacity: 0;
  animation: ${toRight} 1s 1.2s forwards ease;

  @media (max-width: 800px) {
    color: var(--color-primary);
  }

  &::before {
    content: '';
    display: block;

    background: var(--color-accent);
    width: 12px;
    height: 4px;
    margin-right: 8px;
  }
`;

const toTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  opacity: 0;
  animation: ${toTop} 1s forwards ease;

  &:nth-of-type(1) {
    animation-delay: 1.2s;
  }

  &:nth-of-type(2) {
    animation-delay: 1.4s;
  }

  &:nth-of-type(3) {
    animation-delay: 1.6s;
  }

  &:nth-of-type(4) {
    animation-delay: 1.8s;
  }

  &:nth-of-type(5) {
    animation-delay: 1.8s;
  }

  & + & {
    margin-top: 12px;
  }

  > label {
    margin-bottom: 4px;
    font-size: 18px;
    color: var(--color-secondary);

    @media (max-width: 800px) {
      color: var(--color-primary);
    }
  }

  > input {
    background: #f5f5f5;
    width: 100%;
    height: 36px;

    padding: 2px 8px;
    border: 2px solid transparent;
    outline: none;

    font-size: 16px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: var(--color-accent);
    }

    @media (max-width: 800px) {
      border-color: var(--color-text);
    }
  }
`;

export const SubmitButton = styled.button`
  background: #f36;
  width: 100%;
  height: 48px;

  border: none;
  margin-top: 16px;

  font-size: 18px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  opacity: 0;
  animation: ${fade} 1s 2s forwards ease;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;

export const GoTopButton = styled.button`
  background: var(--color-accent);
  width: 32px;
  height: 32px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: var(--color-secondary);

  transform: rotate(90deg);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  opacity: 0;
  animation: ${fade} 1s 2.4s forwards ease;

  &:hover {
    transform: rotate(90deg) scale(1.02, 1.02);
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
