import styled from 'styled-components';

import { modal } from '@/styles';
import { CheckCircle } from '@phosphor-icons/react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const CustomOverlay = styled(AlertDialog.Overlay)`
  ${modal.overlay}
`;

const CustomContent = styled(AlertDialog.Content)`
  ${modal.content}
  max-width: 380rem;
`;

const CustomTitle = styled(AlertDialog.Title)`
  ${modal.title}
`;

const CustomDescription = styled(AlertDialog.Description)`
  ${modal.description}
`;

const CustomCheckCircle = styled(CheckCircle)`
  display: block;
  width: 100rem;
  height: 100rem;
  margin: 16rem auto;
  color: ${({ theme }) => theme.PRIMARY_800};
`;

export {
  CustomOverlay,
  CustomContent,
  CustomTitle,
  CustomDescription,
  CustomCheckCircle,
};
