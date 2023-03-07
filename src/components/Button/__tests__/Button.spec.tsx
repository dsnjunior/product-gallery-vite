import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Button } from '../Button';

describe('Button.tsx', () => {
  it('should match snapshot', async () => {
    render(<Button>Test</Button>);

    expect(await screen.findByRole('button')).toMatchSnapshot();
  });

  it('should render children', async () => {
    render(<Button>Test</Button>);

    expect(await screen.findByText('Test')).toBeInTheDocument();
  });

  it('should render outlined variant', async () => {
    render(<Button variant="outlined">Test</Button>);

    expect(await screen.findByRole('button')).toHaveClass('bg-transparent hover:bg-neutral-50');
  });

  it('should render icon', async () => {
    render(<Button icon={<span data-testid="icon">Icon</span>}>Test</Button>);

    const icon = await screen.findByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass('mr-1');
  });

  it('should render icon at end', async () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>} iconPosition="end">
        Test
      </Button>,
    );

    const button = await screen.findByRole('button');
    expect(button.firstChild).toHaveClass('flex-row-reverse');
    const icon = await screen.findByTestId('icon');
    expect(icon.parentElement).toHaveClass('ml-1');
  });

  it('should render icon only', async () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>} iconPosition="icon-only">
        Test
      </Button>,
    );

    const button = await screen.findByRole('button');
    expect(button).toHaveClass('px-2');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(button.firstChild!.lastChild).toHaveClass('sr-only');
  });

  it('should render disabled', async () => {
    render(<Button disabled>Test</Button>);

    const button = await screen.findByRole('button');
    expect(button).toHaveClass('disabled:text-gray-300');
    expect(button).toBeDisabled();
  });
});
