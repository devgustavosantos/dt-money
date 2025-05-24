import styled, { css } from 'styled-components';

import { modal } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

import { ModalContentProps } from './Modal.types';

const CustomOverlay = styled(Dialog.Overlay)`
  ${modal.overlay}
`;

const CustomContent = styled(Dialog.Content)<ModalContentProps>`
  ${modal.content}
  ${({ isLarge }) =>
    isLarge &&
    css`
      max-width: 538rem;
    `};
`;

const CustomClose = styled(Dialog.Close)`
  position: absolute;
  top: 28rem;
  right: 28rem;
  line-height: 0;
  font-size: 24rem;
`;

const CustomTitle = styled(Dialog.Title)`
  ${modal.title}
`;

const CustomDescription = styled(Dialog.Description)`
  ${modal.description}
`;

export {
  CustomOverlay,
  CustomContent,
  CustomClose,
  CustomTitle,
  CustomDescription,
};
