import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import SearchField from './SearchField';

describe('SearchField Component', () => {
  it('renders the search input with the correct placeholder', () => {
    render(<SearchField />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<SearchField onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
