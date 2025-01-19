import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Section from './Section';

describe('Section Component', () => {
  const title = 'Test Section';
  const items = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ];

  it('renders section title', () => {
    render(<Section title={title} items={items} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders items when not collapsed', () => {
    render(<Section title={title} items={items} initialIsCollapsed={false} />);
    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.email)).toBeInTheDocument();
    });
  });

  it('does not render items when collapsed', () => {
    render(<Section title={title} items={items} initialIsCollapsed={true} />);
    items.forEach(item => {
      expect(screen.queryByText(item.name)).not.toBeInTheDocument();
      expect(screen.queryByText(item.email)).not.toBeInTheDocument();
    });
  });

  it('toggles collapse state on header click', () => {
    render(<Section title={title} items={items} initialIsCollapsed={true} />);
    const header = screen.getByText(title);

    // Initially collapsed
    items.forEach(item => {
      expect(screen.queryByText(item.name)).not.toBeInTheDocument();
    });

    // Click to expand
    fireEvent.click(header);
    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    // Click to collapse again
    fireEvent.click(header);
    items.forEach(item => {
      expect(screen.queryByText(item.name)).not.toBeInTheDocument();
    });
  });
});
