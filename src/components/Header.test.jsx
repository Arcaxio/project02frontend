import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with the correct title', () => {
    render(<Header />);
    expect(screen.getByText(/My Simple Web App/i)).toBeInTheDocument();
  });

  it('renders the header placeholder text', () => {
    render(<Header />);
    expect(screen.getByText(/This is the header section/i)).toBeInTheDocument();
  });
});
