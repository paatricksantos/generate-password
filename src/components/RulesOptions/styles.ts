import styled, { css, keyframes } from "styled-components";
const jelly = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.1, 0.9);
  }
  40% {
    transform: scale(0.8, 1.2);
  }
  50% {
    transform: scale(1.1, 0.8);
  }
  65% {
    transform: scale(0.9, 1);
  }
  75% {
    transform: scale(1, 0.9);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 8px;
    overflow: hidden;

    input {
      position: absolute;
      transform: scale(0);
    }

    label {
      position: relative;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #36383e;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.1s ease;

      &::after {
        content: attr(title);
        position: absolute;
        left: 30px;
        width: 400px;
      }

      &::before {
        content: '';
        position: absolute;
        margin-bottom: 2px;
        width: 4px;
        height: 9px;
        opacity: 0;
        transform: rotate(45deg) scale(0);
        border-right: 3px solid ${theme.primary};
        border-bottom: 3px solid ${theme.primary};
        transition: all 0.3s ease;
        transition-delay: 0.15s;
      }
    }

    input:checked ~ label {
      border-color: transparent;
      background: #1ac0a2;
      animation: ${jelly} 0.6s ease;
    }

    input:checked ~ label:before {
      opacity: 1;
      transform: rotate(45deg) scale(1);
    }
  `}

`;