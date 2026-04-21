import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer with the copyright notice', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear} My Simple Web App`, 'i'))).toBeInTheDocument();
  });

  it('renders the built with text', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with React and Tailwind CSS/i)).toBeInTheDocument();
  });
});
