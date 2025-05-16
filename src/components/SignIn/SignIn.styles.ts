import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-top: 12rem;
`;

const ErrorMessage = styled.p`
  font-size: 14rem;
  color: ${({ theme }) => theme.SECONDARY_800};
  filter: brightness(1.5);
`;

export { LoginForm, ErrorMessage };
