import { ThemeProvider } from 'styled-components';

import { COLORS, Styling } from './styles';

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styling />
      <p>Hello World!</p>
    </ThemeProvider>
  );
}
