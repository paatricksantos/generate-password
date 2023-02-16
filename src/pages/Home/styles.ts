import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  h1 {
    color: #444;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 24px;
  }

  padding: 50px 24px;
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin-inline: auto;
`;

export const ControlsContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.background_secondary};
    padding: 12px 18px;
    border-radius: 8px;
  `}
`;
