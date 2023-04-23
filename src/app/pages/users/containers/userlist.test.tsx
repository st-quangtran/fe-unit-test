import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';
import { renderWithProviders } from '../../../shared/utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ENDPOINT } from '@config/endpoint';

const server = setupServer(
  rest.get(ENDPOINT.user.index, (req, res, ctx) => {
    return res(
      ctx.json([
        {
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
        },
        {
          id: 2,
          name: 'ABC',
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
        }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate
}));

describe('test user list component', () => {
  test('user list is not empty', async () => {
    renderWithProviders(<UserList />);
    // loading
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // wait for call api success
    await waitFor(() => expect(screen.getByTestId('user-list')).toBeInTheDocument());
    // delete user
    fireEvent.click(screen.getByTestId('delete-user-1'));
    expect(screen.queryByTestId('user-1')).not.toBeInTheDocument();
    // detail user
    fireEvent.click(screen.getByTestId('detail-2'));
    expect(mockUseNavigate).toBeCalled();
    expect(mockUseNavigate).toBeCalledWith('/users/2');
  });

  test('user list is empty', async () => {
    server.use(
      rest.get(ENDPOINT.user.index, (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );
    renderWithProviders(<UserList />);
    // loading
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // wait for call api success
    await waitFor(() => expect(screen.getByTestId('empty')).toBeInTheDocument());
    expect(screen.getByTestId('empty')).toHaveTextContent('Empty');
  });

  test('get user list error', async () => {
    server.use(
      rest.get(ENDPOINT.user.index, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    renderWithProviders(<UserList />);
    // loading
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // wait for call api error
    await waitFor(() => expect(screen.getByTestId('error')).toBeInTheDocument());
    expect(screen.getByTestId('error')).toHaveTextContent('Error');
  });
});
