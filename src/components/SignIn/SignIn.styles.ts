import styled from 'styled-components';

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

export { LoginForm, ErrorMessage };
