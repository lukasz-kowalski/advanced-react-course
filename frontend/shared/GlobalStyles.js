import { createGlobalStyle } from 'styled-components';
import colors from './colorPalette';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  *, *:before, *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'radnika_next', sans-serif;
      font-size: 1.5rem;
      line-height: 2;
    }

    a {
      text-decoration: none;
      color: ${colors.black};

      &:hover {
        text-decoration: underline;
      }
    }
`;

export default GlobalStyles;
