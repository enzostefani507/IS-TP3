import { render, screen } from '@testing-library/react';
import App from './App';

test('este texto debe estar presente en la pagina', () => {
  render(<App />);
  const linkElement = screen.getByText(/Es la mejor materia/);
  expect(linkElement).toBeInTheDocument();
});
