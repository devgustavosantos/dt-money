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

const LoginForm = styled.form`
  margin-top: 24rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-top: 20rem;
`;

const ErrorMessage = styled.p`
  margin-top: 20rem;
  font-size: 14rem;
`;

export {
  CustomOverlay,
  CustomContent,
  CustomTitle,
  LoginForm,
  ButtonsContainer,
  ErrorMessage,
};
