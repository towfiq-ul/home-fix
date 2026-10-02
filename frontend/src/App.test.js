import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
  Link: ({ children, to, onClick, className }) => (
    <a href={to} onClick={onClick} className={className}>{children}</a>
  ),
  useNavigate: () => () => {},
  useSearchParams: () => [new URLSearchParams(), () => {}],
  useParams: () => ({ id: '1' }),
}));

import App from './App';

test('renders HomeFix brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Home/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
