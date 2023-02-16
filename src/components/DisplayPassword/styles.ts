import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.background_secondary};
    padding: 4px 6px 4px 18px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
    font-size: 1.2rem;

    span {
      font-size: 1.2rem;
    }

    button {
      background: none;
      border: 0;
      padding: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in;
      svg {
        color: ${theme.green};
        cursor: pointer;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  `}
`;
