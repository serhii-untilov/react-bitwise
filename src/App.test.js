import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders application's name`, () => {
  render(<App />);
  const linkElement = screen.getByText(/Bitwise calculator/i);
  expect(linkElement).toBeInTheDocument();
});
