import styled from 'styled-components';

import { modal } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

const CustomOverlay = styled(Dialog.Overlay)`
  ${modal.overlay}
`;

const CustomContent = styled(Dialog.Content)`
  ${modal.content}
  max-width: 535rem;
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

export { CustomOverlay, CustomContent, CustomClose, CustomTitle };
