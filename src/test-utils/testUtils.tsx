import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../root-app/common/styles/theme/theme';
import { RenderOptions, render } from '@testing-library/react';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRenderer = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRenderer as render };
