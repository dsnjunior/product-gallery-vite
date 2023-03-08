import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Tag } from '../Tag';

describe('Tag.tsx', () => {
  it('should have correct styles on wrappers', () => {
    render(<Tag variant="gift" />);

    const wrapper = screen.getByText('Free gift').parentElement;

    expect(wrapper).toHaveClass('inline-flex items-center');

    const imageWrapper = screen.getByRole('img').parentElement;
    expect(imageWrapper).toHaveClass('flex-shrink-0 mr-1');
  });

  it('should render gift variant', () => {
    render(<Tag variant="gift" />);

    const label = screen.getByText('Free gift');

    expect(label).toHaveClass('text-c100 text-gray-400');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/tag/gift.svg');
    expect(image).toHaveAttribute('alt', 'Free gift tag icon');
  });

  it('should render shipping variant', () => {
    render(<Tag variant="shipping" />);

    const label = screen.getByText('Free shipping');

    expect(label).toHaveClass('text-c100 text-gray-400');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/tag/shipping.svg');
    expect(image).toHaveAttribute('alt', 'Free shipping tag icon');
  });

  it('should render coupon variant', () => {
    render(<Tag variant="coupon" />);

    const label = screen.getByText('Coupon');

    expect(label).toHaveClass('text-c100 text-cyan-400');

    const image = screen.getByRole('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', '/src/assets/icons/tag/coupon.svg');
    expect(image).toHaveAttribute('alt', 'Coupon tag icon');
  });
});
