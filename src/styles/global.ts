/* eslint-disable max-lines */
import { createGlobalStyle } from 'styled-components';

import { BREAKPOINTS } from './breakpoints';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 160%;
  }

  html#standard {
    font-size: 6.25%; //16px
  }

  body#default,
  input,
  button,
  textarea{
    color: ${({ theme }) => theme.BASE_400};
    outline: none;
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body#default {
    width: 100%;
    background-color: ${({ theme }) => theme.BASE_800};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.BASE_300};
  }

  button {
    border: none;
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a,
  label {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button,
  a,
  input,
  label {
    &:disabled {
      filter: brightness(0.8);

      &:hover {
        cursor: not-allowed;
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  a:visited {
    color: inherit;
  }

  svg {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }

  @media only screen and (min-width: ${BREAKPOINTS.EXTRA_LARGE}) {
    html#standard {
      font-size: max(6.25%, 0.056vw);
    }
  }
`;
