import '@testing-library/jest-dom';

import { server } from '../mocks/setup/server';
import { ReactNode } from 'react';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

type AutoSizerModule = typeof import('react-virtualized-auto-sizer');

jest.mock<AutoSizerModule>('react-virtualized-auto-sizer', () => ({
  __esModule: true,
  ...jest.requireActual<AutoSizerModule>('react-virtualized-auto-sizer'),
  default: jest.fn().mockImplementation(({ children }) => {
    return (children as (mock_size: { width: number; height: number }) => ReactNode)({
      width: 600,
      height: 600,
    });
  }),
}));
