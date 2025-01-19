import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import SearchableList from './SearchableList';

vi.mock('../SearchField/SearchField', () => ({
  default: ({ searchString, onChange }) => (
    <input
      data-testid="search-field"
      value={searchString}
      onChange={onChange}
    />
  ),
}));

vi.mock('../Section/Section', () => ({
  default: ({ title, items, showEmail }) => (
    <div data-testid="section">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>{showEmail && item.email}</div>
          </li>
        ))}
      </ul>
    </div>
  ),
}));

describe('SearchableList', () => {
  const sections = {
    'Section 1': [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ],
    'Section 2': [
      { name: 'Charlie', email: 'charlie@example.com' },
    ],
  };

  it('filters sections based on search input', () => {
    render(<SearchableList sections={sections} />);

    const searchField = screen.getByTestId('search-field');
    fireEvent.change(searchField, { target: { value: 'B' } });

    const sectionElements = screen.getAllByTestId('section');
    expect(sectionElements).toHaveLength(2);
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('shows email when showEmail is true', () => {
    render(<SearchableList sections={sections} showEmail={true} />);
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
  });

  it('hides email when showEmail is false', () => {
    render(<SearchableList sections={sections} showEmail={false} />);
    expect(screen.queryByText('alice@example.com')).not.toBeInTheDocument();
  });
});
