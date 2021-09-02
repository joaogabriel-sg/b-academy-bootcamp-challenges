import styled from 'styled-components';

export const Row = styled.tr`
  & + & {
    border-top: 1px solid var(--color-accent);
  }

  > td {
    padding: 12px;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid var(--color-text);
    }
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Color = styled.div`
  display: inline-block;

  background: ${({ color }) => color};
  width: 80px;
  height: 80px;

  border: 1px solid var(--color-text);
  margin-right: 0;
`;

export const DeleteButton = styled.button`
  background: var(--color-accent);
  width: 36px;
  height: 36px;
  border: none;

  font-size: 16px;
  font-weight: 600;
  color: var(--color-secondary);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.02, 1.02);
  }
`;
