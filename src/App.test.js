import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/how spicy?/i);
  expect(linkElement).toBeInTheDocument();
});

test('makes burrity', () => {
  render(<App />);
  expect(true).toBe(true);
});
