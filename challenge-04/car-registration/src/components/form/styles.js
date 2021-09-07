import styled, { keyframes } from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  animation: ${fade} 0.8s forwards ease;
`;

const toRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
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
  color: var(--color-primary);

  opacity: 0;
  animation: ${toRight} 1s forwards ease;

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
    animation-delay: 0.2s;
  }

  &:nth-of-type(2) {
    animation-delay: 0.4s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.6s;
  }

  &:nth-of-type(4) {
    animation-delay: 0.8s;
  }

  &:nth-of-type(5) {
    animation-delay: 0.8s;
  }

  & + & {
    margin-top: 12px;
  }

  > label {
    margin-bottom: 4px;
    font-size: 18px;
    color: var(--color-primary);
  }

  > input {
    background: #f5f5f5;
    width: 100%;
    height: 36px;

    padding: 2px 8px;
    border: 1px solid var(--color-text);
    outline: none;

    font-size: 16px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: var(--color-accent);
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
  animation: ${fade} 1s forwards ease;
  animation-delay: 1.2s;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;
