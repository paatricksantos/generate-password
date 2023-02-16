import styled, { css, DefaultTheme } from "styled-components";

const printStrength = (level: string, theme: DefaultTheme) => {
  switch (level) {
    case '1':
      return theme.red;
    case '2':
      return theme.orange;
    case '3':
      return theme.yellow;
    case '4':
      return theme.green;
  }
};

export const Container = styled.div<{strengthLevel: string}>`
  ${({ theme, strengthLevel }) => css`
    display: flex;
    justify-content: space-between;
    background: ${theme.background};
    padding: 12px;

    margin-top: 16px;
    margin-bottom: 24px;

    h3 {
      text-transform: uppercase;
      color: ${theme.secondary};
      font-weight: 400;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 16px;

      p {
        font-size: 12px;
        color: ${theme.primary};
      }

      > div {
        display: flex;
        gap: 8px;
        height: 100%;
        span {
          border: 2px solid;
          border-radius: 2px;
          width: 12px;
          transition: all 0.3s;
          &:nth-child(-n + ${strengthLevel}) {
            background-color: ${printStrength(strengthLevel, theme)};
          }
        }
      }
    }
  `}
`;