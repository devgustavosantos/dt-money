/* eslint-disable max-lines */
import { css } from 'styled-components';

import { BREAKPOINTS } from './breakpoints';

const overlay = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 75%);
  z-index: 999;
`;

const content = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: ${({ theme }) => theme.BASE_800};
  z-index: 9999;
  padding: 48rem;
  border-radius: 6rem;
  box-shadow: 0 4rem 32rem rgba(0, 0, 0, 80%);

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    max-width: initial;
    transform: initial;
    inset: auto 0 0 0;
    padding: 24rem;
    border-radius: 6rem 6rem 0 0;
  }
`;

const title = css`
  font-weight: 700;
  font-size: 24rem;
  line-height: 140%;
  color: ${({ theme }) => theme.BASE_300};

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 20rem;
  }
`;

const description = css`
  font-size: 14rem;
  line-height: 160%;
`;

export const modal = {
  overlay,
  content,
  title,
  description,
};
