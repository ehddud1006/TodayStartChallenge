import { css } from '@emotion/react';

import SfPro from '@/assets/font/SfPro.ttf';

import theme from './theme';

const globalStyle = css`
  @font-face {
    font-family: 'SfPro';
    src: url(${SfPro}) format('ttf');
  }

  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font-family: 'SfPro', sans-serif;

    color: inherit;

    flex-shrink: 0;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    letter-spacing: -0.025rem;

    font-size: ${theme.size[16]};
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
