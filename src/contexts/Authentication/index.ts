import { createContext, useContext } from 'react';

import { AuthenticationContextType } from './Authentication.types';

const AuthenticationContext = createContext({} as AuthenticationContextType);
const useAuthenticationContext = () => useContext(AuthenticationContext);

export { AuthenticationContext, useAuthenticationContext };
export { AuthenticationProvider } from './Authentication.provider';
