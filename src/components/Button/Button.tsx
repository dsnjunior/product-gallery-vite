import clsx from 'clsx';
import { Typography } from '../Typography';

export type ButtonProps = {
  variant?: 'filled' | 'outlined';
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end' | 'icon-only';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

export function Button({ variant = 'filled', icon, iconPosition = 'start', disabled, children, onClick }: ButtonProps) {
  const outlined = variant === 'outlined';
  const iconStart = iconPosition === 'start';
  const iconEnd = iconPosition === 'end';
  const iconOnly = iconPosition === 'icon-only';

  return (
    <button
      className={clsx(
        'text-emerald-500 disabled:text-gray-300',
        'px-6 py-2',
        'rounded-full bg-current border-current border shadow-border transition-colors',
        {
          ['bg-transparent hover:bg-neutral-50']: outlined,
          ['hover:text-emerald-600']: !outlined,
          ['px-2']: iconOnly,
        },
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span
        className={clsx('flex items-center', {
          ['text-neutral-50']: !outlined,
          ['flex-row-reverse']: iconEnd,
        })}
      >
        {icon && <span className={clsx('text-[1.125rem]', { ['ml-1']: iconEnd, ['mr-1']: iconStart })}>{icon}</span>}

        <Typography variant="l100" weight="700" component="span" className={clsx({ ['sr-only']: iconOnly })}>
          {children}
        </Typography>
      </span>
    </button>
  );
}
