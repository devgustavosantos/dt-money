import styled from 'styled-components';

import { modal } from '@/styles';
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-top: 12rem;
`;

const ErrorMessage = styled.p`
  margin-top: 20rem;
  font-size: 14rem;
`;

export {
  CustomOverlay,
  CustomContent,
  CustomTitle,
  CustomDescription,
  LoginForm,
  ErrorMessage,
};
