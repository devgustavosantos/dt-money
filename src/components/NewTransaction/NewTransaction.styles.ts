import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { EntryProps } from './NewTransaction.types';

const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16rem;
  margin: 32rem 0 24rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    margin: 24rem 0;
  }
`;

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const Entry = styled.input<EntryProps>`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  ${({ hasError, theme }) =>
    hasError && `outline: 1rem solid ${theme.SECONDARY_800}`};
`;

const EntryError = styled.p`
  color: ${({ theme }) => theme.SECONDARY_800};
  font-size: 12rem;
`;

const TransactionTypeContainer = styled(EntryWrapper)`
  margin-bottom: 40rem;
`;

const TransactionTypeWrapper = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rem;
`;

const CustomArrowCircleUp = styled(ArrowCircleUp)`
  font-size: 24rem;
  color: ${({ theme }) => theme.PRIMARY_700};
`;

const CustomArrowCircleDown = styled(ArrowCircleDown)`
  font-size: 24rem;
  color: ${({ theme }) => theme.SECONDARY_800};
`;

const TransactionTypeButton = styled(RadioGroup.Item)`
  padding: 16rem;
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  background-color: ${({ theme }) => theme.BASE_700};

  &:hover {
    filter: brightness(1.4);
  }

  &[data-custom-checked='true'] {
    color: ${({ theme }) => theme.BASE_200};

    &[value='income'] {
      background-color: ${({ theme }) => theme.PRIMARY_900};
    }

    &[value='outcome'] {
      background-color: ${({ theme }) => theme.SECONDARY_900};
    }

    /* stylelint-disable-next-line */
    ${CustomArrowCircleUp}, ${CustomArrowCircleDown} {
      color: ${({ theme }) => theme.BASE_200};
    }
  }
`;

const Message = styled.p`
  margin-top: 12rem;
`;

export {
  EntriesContainer,
  EntryWrapper,
  Entry,
  EntryError,
  TransactionTypeContainer,
  TransactionTypeWrapper,
  TransactionTypeButton,
  CustomArrowCircleUp,
  CustomArrowCircleDown,
  Message,
};
