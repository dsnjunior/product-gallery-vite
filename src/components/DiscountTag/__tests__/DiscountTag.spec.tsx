import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { DiscountTag } from '../DiscountTag';

describe('DiscountTag.tsx', () => {
  it('should render discount tag', () => {
    render(<DiscountTag discount={35} />);

    const discountTag = screen.getByText('35% Off');

    expect(discountTag).toBeInTheDocument();

    expect(discountTag).toHaveClass(
      'border shadow-border border-current rounded text-neutral-700 px-2 h-6 inline-flex items-center',
    );

    expect(discountTag).toMatchSnapshot();
  });

  it('should render discount tag with 0% discount', () => {
    render(<DiscountTag discount={0} />);

    const discountTag = screen.getByText('0% Off');

    expect(discountTag).toBeInTheDocument();
  });

  it('should render discount tag with 100% discount', () => {
    render(<DiscountTag discount={100} />);

    const discountTag = screen.getByText('100% Off');

    expect(discountTag).toBeInTheDocument();
  });
});
