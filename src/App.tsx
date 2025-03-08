import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { COLORS, Styling } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styling />
      <Home />
    </ThemeProvider>
  );
}
