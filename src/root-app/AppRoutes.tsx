import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from './common/components/loader/Loader';
import AppLayout from './AppLayout';
import ErrorPage from './ErrorPage';
import { NotFound } from './common/components/not-found/NotFound';

const SearchPage = lazy(() => import('./features/search/SearchPage'));
const FavoritesPage = lazy(() => import('./features/favourites/FavouritesPage'));

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h3>Welcome Home!</h3> },
      {
        path: '/search',
        element: (
          <Suspense fallback={<Loader />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: '/favorites',
        element: (
          <Suspense fallback={<Loader />}>
            <FavoritesPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export { appRoutes };
