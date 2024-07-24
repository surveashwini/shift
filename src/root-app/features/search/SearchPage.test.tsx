import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '../../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  afterAll(() => sessionStorage.clear());
  beforeEach(() => sessionStorage.clear());
  test('render table', async () => {
    render(<SearchPage />);

    await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));

    expect(screen.getByText('West Herts College')).toBeInTheDocument();
    expect(
      screen.getByText('National Institute of Applied Sciences of Toulouse'),
    ).toBeInTheDocument();
  });

  test('add to favorite', async () => {
    const user = userEvent.setup();

    render(<SearchPage />);

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'), {
      timeout: 5000,
    });

    let buttons = screen.getAllByLabelText('Action button Favourite');
    await user.click(buttons[0]);

    if (sessionStorage.getItem('favorites') === null) {
      fail('expecting favorites to be non-empty');
    }

    const storageItem = JSON.parse(sessionStorage.getItem('favorites') as '[]');
    expect(storageItem).toHaveLength(1);
    expect(storageItem[0].name).toBe('West Herts College');

    buttons = screen.getAllByLabelText('Action button Favourite');
    await user.click(buttons[0]);

    if (sessionStorage.getItem('favorites') === null) {
      fail('expecting favorites to be non-empty');
    }

    expect(JSON.parse(sessionStorage.getItem('favorites') as '[]')).toHaveLength(0);
  });
});
