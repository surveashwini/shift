import React from 'react';
import { createRoot } from 'react-dom/client';

import AppProviders from './root-app/AppProviders';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>,
);
