import { css } from '@emotion/react';

import AppleSDGothicNeoM from '@/assets/font/AppleSDGothicNeoM.ttf';

import theme from './theme';

const globalStyle = css`
  @font-face {
    font-family: 'AppleSDGothicNeoM';
    src: url(${AppleSDGothicNeoM}) format('ttf');
  }

  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font: inherit;
    color: inherit;

    flex-shrink: 0;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    letter-spacing: -0.025rem;

    font-size: ${theme.size[16]};
    font-family: 'AppleSDGothicNeoM', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: inherit;
  }
`;

export default globalStyle;
