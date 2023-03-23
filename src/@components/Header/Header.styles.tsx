import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@/styles/theme';

type circleColorProps = {
  color: 'red' | 'orange' | 'green';
};

const circleColor = {
  red: theme.colors.red_2,
  orange: theme.colors.orange_2,
  green: theme.colors.green_2,
};

export const Root = styled.div`
  margin: 5px 8px 10px;
`;

export const Circle = styled.span<circleColorProps>`
  display: inline-block;

  height: 12px;
  width: 12px;

  ${({ color }) =>
    css`
      background-color: ${circleColor[color]};
    `}

  border-radius: 50%;
`;

export const CircleContainer = styled.div`
  & > * + * {
    margin-left: 8px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 5px;

  & > :nth-child(2) {
    flex-grow: 1;
  }
`;

export const Logo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 10%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 5px;
`;

export const PeopleContainer = styled.div`
  display: flex;

  align-items: center;
`;

export const People = styled.img`
  filter: invert(51%) sepia(1%) saturate(0%) hue-rotate(351deg);
  width: 14px;
  height: 12px;
`;

export const PeopleCount = styled.span`
  padding: 3px 0 0 2px;
  font-size: 13px;
`;

export const Title = styled.h1``;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border: 1px solid #d7d7d7;
  border-radius: 50%;
`;

export const Icon = styled.img`
  filter: invert(41%) sepia(3%) saturate(140%) hue-rotate(314deg);

  width: 12px;
  height: 12px;
`;
