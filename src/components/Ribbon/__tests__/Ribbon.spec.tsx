import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Ribbon } from '../Ribbon';

describe('Ribbon.tsx', () => {
  it('should render default variant', () => {
    render(<Ribbon label="Sponsored" />);

    const label = screen.getByText('Sponsored');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ribbon = label.parentElement!;

    expect(label).toHaveClass('text-l100');
    expect(ribbon).toHaveClass('text-neutral-600 bg-gray-100');
  });

  it('should render winner variant', () => {
    render(<Ribbon variant="winner" />);

    const label = screen.getByText('Winner');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ribbon = label.parentElement!;

    expect(ribbon).toHaveClass('bg-amber-400 text-white');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/ribbon/winner.svg');
  });

  it('should render best-value variant', () => {
    render(<Ribbon variant="best-value" />);

    const label = screen.getByText('Best Value');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ribbon = label.parentElement!;

    expect(ribbon).toHaveClass('bg-rose-500 text-white');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/ribbon/best-value.svg');
  });

  it('should render custom label with variant', () => {
    render(<Ribbon label="Custom label" variant="best-value" />);

    const label = screen.getByText('Custom label');

    expect(label).toHaveClass('text-l100');
  });
});
