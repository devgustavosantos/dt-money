import { useAuthentication } from './Authentication.hook';

export function Authentication() {
  const { StepToRender } = useAuthentication();

  return <StepToRender />;
}
