import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#e1edfa',
    secondary: '#2C3E50',
    background: '#FFFFFF',
    text: '#333333',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#e9e9e9',
  },
  fonts: {
    main: 'Arial, sans-serif',
    heading: 'Helvetica, sans-serif',
  },
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    normal: 1.5,
    heading: 1.2,
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borderRadius: '4px',
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    large: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  zIndex: {
    dropdown: 1000,
    modal: 1050,
    tooltip: 1070,
  },
  borders: {
    thin: '1px solid',
    thick: '2px solid',
  },
  containerSizes: {
    small: '540px',
    medium: '720px',
    large: '960px',
    xlarge: '1140px',
  },
};

export { theme };
