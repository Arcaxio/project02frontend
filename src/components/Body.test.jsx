import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Body from './Body';

describe('Body Component', () => {
  it('renders the body with the correct heading', () => {
    render(<Body />);
    expect(screen.getByText(/Main Content Area/i)).toBeInTheDocument();
  });

  it('renders the body description text', () => {
    render(<Body />);
    expect(screen.getByText(/This is the body section of the application/i)).toBeInTheDocument();
  });

  it('renders the placeholder div', () => {
    render(<Body />);
    expect(screen.getByText(/Placeholder for main application logic or data display/i)).toBeInTheDocument();
  });
});
