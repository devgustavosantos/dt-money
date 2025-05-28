import styled from 'styled-components';

import * as RadioGroup from '@radix-ui/react-radio-group';

const PaginationContainer = styled.section`
  max-width: 300rem;
  margin: 40rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rem;
`;

const ChangePage = styled.button`
  display: flex;
  align-items: center;
  font-size: 24rem;
  color: ${({ theme }) => theme.PRIMARY_800};

  &:disabled {
    color: ${({ theme }) => theme.BASE_600};
    filter: brightness(1);
  }

  &:hover:not(:disabled) {
    filter: brightness(1.4);
  }

  @media (pointer: coarse) {
    &:hover:not(:disabled) {
      filter: brightness(1);
    }
  }
`;

const PagesContainer = styled(RadioGroup.Root)`
  display: flex;
  justify-content: center;
  gap: 8rem;
`;

const PageSelector = styled(RadioGroup.Item)`
  width: 40rem;
  height: 40rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.BASE_600};
  transition: background-color 0.4s;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.PRIMARY_900};
  }

  &:hover {
    filter: brightness(1.4);
  }

  @media (pointer: coarse) {
    &:hover {
      filter: brightness(1);
    }
  }
`;

const PageIndicator = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.BASE_300};
`;

export {
  PaginationContainer,
  ChangePage,
  PagesContainer,
  PageSelector,
  PageIndicator,
};
