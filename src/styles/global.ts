import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'JetBrains Mono', monospace;
    }
    body {
      background: ${theme.background};
      font-family: 'JetBrains Mono', monospace;
      color: ${theme.primary};
    }
  `}
`;
