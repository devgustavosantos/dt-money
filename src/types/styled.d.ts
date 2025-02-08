/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { COLORS } from '@/styles';

type ThemeType = typeof COLORS;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
