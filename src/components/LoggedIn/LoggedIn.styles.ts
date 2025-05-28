import styled from 'styled-components';

import { UserCircleCheck } from '@phosphor-icons/react';

export const CustomUserCircleCheck = styled(UserCircleCheck)`
  display: block;
  width: 100rem;
  height: 100rem;
  margin: 16rem auto;
  color: ${({ theme }) => theme.PRIMARY_800};
`;
