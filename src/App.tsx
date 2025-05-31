import { ThemeProvider } from 'styled-components';

import { Authentication } from './components';
import { AuthenticationProvider } from './contexts';
import { Home } from './pages';
import { COLORS, Styling } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styling />
      <AuthenticationProvider>
        <Home />
        <Authentication />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
