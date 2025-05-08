import { SignIn, SignOut } from '@/components';

export function Authentication() {
  const isAuthenticated = true;

  return isAuthenticated ? <SignOut /> : <SignIn />;
}
