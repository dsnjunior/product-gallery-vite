import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Typography } from '../Typography';

describe('Typography.tsx', () => {
  it('should match snapshot', async () => {
    render(<Typography>Test</Typography>);

    expect(await screen.findByText('Test')).toMatchSnapshot();
  });

  it('should render children', async () => {
    render(<Typography>Test</Typography>);

    expect(await screen.findByText('Test')).toBeInTheDocument();
  });

  it.each([
    { variant: 'h600' as const, tag: 'h1' },
    { variant: 'h500' as const, tag: 'h2' },
    { variant: 'h400' as const, tag: 'h3' },
    { variant: 'h300' as const, tag: 'h4' },
    { variant: 'h200' as const, tag: 'h5' },
    { variant: 'h100' as const, tag: 'h6' },
    { variant: 'p300' as const, tag: 'p' },
    { variant: 'p200' as const, tag: 'p' },
    { variant: 'c200' as const, tag: 'p' },
    { variant: 'c100' as const, tag: 'p' },
    { variant: 'l100' as const, tag: 'label' },
  ])('variant $variant should have correct tag and className', async ({ variant, tag }) => {
    render(<Typography variant={variant}>Test</Typography>);

    const element = await screen.findByText('Test');
    expect(element.tagName.toLocaleLowerCase()).toBe(tag);
    expect(element).toHaveClass(`text-${variant}`);
  });

  it('should render custom component', async () => {
    render(<Typography component="div">Test</Typography>);

    expect((await screen.findByText('Test')).tagName.toLocaleLowerCase()).toBe('div');
  });

  it('should render custom className', async () => {
    render(<Typography className="custom">Test</Typography>);

    expect(await screen.findByText('Test')).toHaveClass('custom');
  });

  it('should render custom weight', async () => {
    render(<Typography weight="600">Test</Typography>);

    expect(await screen.findByText('Test')).toHaveClass('font-600');
  });

  it('should render custom transform', async () => {
    render(<Typography transform="uppercase">Test</Typography>);

    expect(await screen.findByText('Test')).toHaveClass('uppercase');
  });

  it('should render custom weight and transform', async () => {
    render(
      <Typography weight="600" transform="uppercase">
        Test
      </Typography>,
    );

    const element = await screen.findByText('Test');
    expect(element).toHaveClass('font-600');
    expect(element).toHaveClass('uppercase');
  });

  it('should render custom weight and transform with variant', async () => {
    render(
      <Typography variant="h100" weight="600" transform="uppercase">
        Test
      </Typography>,
    );

    const element = await screen.findByText('Test');
    expect(element).toHaveClass('text-h100');
    expect(element).toHaveClass('font-600');
    expect(element).toHaveClass('uppercase');
  });
});
