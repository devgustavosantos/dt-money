import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '@/styles';

import { ButtonProps, VariantsStyles } from './Button.types';

const ButtonSmallStyles = css`
  padding: 8rem;
  font-size: 14rem;
`;

const ButtonMediumStyles = css`
  padding: 12rem;
  font-size: 16rem;
`;

const ButtonLargeStyles = css`
  padding: 16rem;
  font-size: 16rem;
`;

const buttonVariants: VariantsStyles = {
  medium: ButtonMediumStyles,
  large: ButtonLargeStyles,
};

export const Button = styled.button<ButtonProps>`
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.PRIMARY_800};
  color: ${({ theme }) => theme.BASE_200};
  font-weight: 600;
  display: block;
  width: 100%;
  transition: background-color 0.4s;
  ${({ variant }) => buttonVariants[variant]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.PRIMARY_700};
    filter: initial;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    ${({ variant }) =>
    variant === 'large' ? ButtonMediumStyles : ButtonSmallStyles};
  }
`;
