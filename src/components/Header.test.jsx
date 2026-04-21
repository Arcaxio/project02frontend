import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';
import { ThemeProvider } from './theme-provider';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Header Component', () => {
  it('renders the header with the logo', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByText(/Arcaxio/i)).toBeInTheDocument();
  });

  it('renders the theme toggle button on desktop', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // Desktop toggle has aria-label "Toggle theme"
    const toggle = screen.getByLabelText(/Toggle theme/i);
    expect(toggle).toBeInTheDocument();
  });
});
