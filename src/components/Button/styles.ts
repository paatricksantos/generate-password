import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  outline: 0;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;

  background-color: ${({ theme }) => theme.green};
  color: #000;
  font-size: 1.2rem;
  padding: 8px;
  cursor: pointer;
`