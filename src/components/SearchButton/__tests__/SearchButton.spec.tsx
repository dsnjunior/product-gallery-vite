import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { SearchButton } from '../SearchButton';

describe('SearchButton.tsx', () => {
  it('should render default variant', () => {
    render(<SearchButton searching={false} onClick={vi.fn()} />);

    const label = screen.getByText('Search for anything');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const button = label.parentElement!;

    expect(label).toHaveClass('text-gray-500');
    expect(button).toHaveClass('bg-gray-50');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/search/search.svg');
    expect(image).toHaveAttribute('alt', 'Search for anything');
  });

  it('should render searching variant', () => {
    render(<SearchButton searching onClick={vi.fn()} />);

    const label = screen.getByText('Cancel search');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const button = label.parentElement!;

    expect(label).toHaveClass('text-gray-500');
    expect(button).toHaveClass('bg-gray-50');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/search/cancel.svg');
    expect(image).toHaveAttribute('alt', 'Cancel search');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();

    render(<SearchButton searching={false} onClick={onClick} />);

    const button = screen.getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
