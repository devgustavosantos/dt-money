import styled from 'styled-components';

import { CheckCircle } from '@phosphor-icons/react';

export const CustomCheckCircle = styled(CheckCircle)`
  display: block;
  width: 100rem;
  height: 100rem;
  margin: 16rem auto;
  color: ${({ theme }) => theme.PRIMARY_800};
`;
