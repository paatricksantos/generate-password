import 'styled-components';
import { ThemeType } from './themes';
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    background: string;
    background_secondary: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
  }
}
