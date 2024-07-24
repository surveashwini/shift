
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
    };
    fonts: {
      main: string;
      heading: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      normal: number;
      heading: number;
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    borderRadius: string;
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    zIndex: {
      dropdown: number;
      modal: number;
      tooltip: number;
    };
    borders: {
      thin: string;
      thick: string;
    };
    containerSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}
