import styled from 'styled-components';

import { BREAKPOINTS } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

const CustomOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 75%);
  z-index: 999;
`;

const CustomContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 535rem;
  width: 100%;
  background-color: ${({ theme }) => theme.BASE_800};
  z-index: 9999;
  padding: 48rem;
  border-radius: 6rem;
  box-shadow: 0 4rem 32rem rgba(0, 0, 0, 80%);

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    max-width: initial;
    transform: initial;
    top: initial;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24rem;
  }
`;

const CustomClose = styled(Dialog.Close)`
  position: absolute;
  top: 28rem;
  right: 28rem;
  line-height: 0;
  font-size: 24rem;
`;

const CustomTitle = styled(Dialog.Title)`
  font-weight: 700;
  font-size: 24rem;
  line-height: 160%;
  color: ${({ theme }) => theme.BASE_300};

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 20rem;
  }
`;

export { CustomOverlay, CustomContent, CustomClose, CustomTitle };
