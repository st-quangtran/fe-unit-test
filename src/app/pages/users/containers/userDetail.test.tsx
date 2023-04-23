import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetail from './UserDetail';
import { renderWithProviders } from '../../../shared/utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ENDPOINT } from '@config/endpoint';

const server = setupServer(
  rest.get(`${ENDPOINT.user.index}/:id`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('test user detail component', () => {
  test('get user detail succsess', async () => {
    renderWithProviders(<UserDetail />);
    // screen.debug();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('user-detail')).toBeInTheDocument());
    expect(screen.getByText('Name:')).toBeInTheDocument();
  });
  test('get user detail error', async () => {
    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get(`${ENDPOINT.user.index}/:id`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    renderWithProviders(<UserDetail />);
    // screen.debug();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('error')).toBeInTheDocument());
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
