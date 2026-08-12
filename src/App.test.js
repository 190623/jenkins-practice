import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /welcome to expense tracker/i,
  });

  expect(heading).toBeInTheDocument();
});