import styled, { css } from "styled-components";

export const Container = styled.div`
 ${({ theme}) => css`
      margin-bottom: 18px;
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 0.725rem;
        }

        span {
          color: ${theme.green};
          font-size: 1.2rem;
        }
      }
      input {
        accent-color: ${theme.green};
        height: 4px;
        border-radius: 8px;
        width: 100%;

        -webkit-appearance: none;

        background: #2b2d32;
        outline: none;
        transition: all 0.3s ease;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border: 0;
          border-radius: 50%;
          background: ${theme.green};
          cursor: pointer;
          transition: all 0.3s ease;

          transform: rotate(45deg);
          border-radius: 4px;
        }

        &::-webkit-slider-thumb:hover {
          transform: scale(1.2, 0.9);
        }
      }
 `}
`