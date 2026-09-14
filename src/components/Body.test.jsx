import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Body from './Body';

describe('Body Component', () => {
  it('renders the giant input field with rounded-full class', () => {
    render(<Body />);
    const input = screen.getByRole('textbox', { name: /search field/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('rounded-full');
    expect(input).toHaveClass('border-2');
  });

  it('updates input value on user input', () => {
    render(<Body />);
    const input = screen.getByRole('textbox', { name: /search field/i });
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input.value).toBe('test query');
  });

  it('renders list items with 4rem height and 800px max-width', () => {
    render(<Body />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
    listItems.forEach((item) => {
      expect(item).toHaveClass('h-[4rem]');
      expect(item).toHaveClass('max-w-[800px]');
    });
  });

  it('renders item images and uuids from fake data', () => {
    render(<Body />);
    expect(screen.getByText('a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d')).toBeInTheDocument();
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/item1/100/100');
  });
});
