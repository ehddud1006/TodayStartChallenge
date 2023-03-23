import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_3};

    @media (min-width: ${theme.screenSize.md}) {
      height: 100vh;
    }
  `}
`;

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 425px;
  min-width: 280px;
  height: calc(var(--vh, 1vh) * 100);
  max-height: 1000px;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_0};

    @media (min-width: ${theme.screenSize.md}) {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      border-radius: 10px;
    }
  `}
`;
