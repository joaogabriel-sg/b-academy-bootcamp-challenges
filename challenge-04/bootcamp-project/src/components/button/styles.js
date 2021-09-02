import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  min-width: 164px;
  height: 48px;
  padding: 0 8px;
  border-radius: 4px;
  border: 2px solid transparent;

  font-size: 16px;
  font-weight: 700;
  transition: transform 0.2s ease-in-out;

  ${({ kind }) =>
    kind === 'primary'
      ? css`
          background: var(--color-accent);
          color: var(--color-secondary);

          &:hover {
            transform: scale(1.02, 1.02);
          }
        `
      : css`
          background: var(--color-secondary);
          border-color: var(--color-accent);
          color: var(--color-accent);

          &:hover {
            transform: scale(1.02, 1.02);
          }
        `}
`;
