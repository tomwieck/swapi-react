import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom/extend-expect'

import { act, render, screen, waitFor } from '@testing-library/react';
import App from './App';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Test',
      }),
    )
  }),
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

test('renders learn react link', async () => {

  render(<App />);

  expect(await screen.findByText(/Test/i)).toBeInTheDocument()
});
