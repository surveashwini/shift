import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/styles/theme/theme';
import { GlobalStyles } from './App.styled';
import { appRoutes } from './AppRoutes';

export default function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={appRoutes} />
    </ThemeProvider>
  );
}
