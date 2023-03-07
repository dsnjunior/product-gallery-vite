import clsx from 'clsx';
import { Typography } from '../Typography';

import winnerIcon from '../../assets/icons/ribbon/winner.svg';
import bestValueIcon from '../../assets/icons/ribbon/best-value.svg';

export type RibbonProps = {
  label?: string;
  variant?: 'default' | 'winner' | 'best-value';
};

const defaultLabel = {
  default: '',
  winner: 'Winner',
  'best-value': 'Best Value',
} as const;

function RibbonIcon({ src }: { src: string }) {
  return (
    <div className="flex h-full">
      <img src={src} alt="Ribbon icon" className="-ml-px" />
      <span className="ml-1 mr-2 h-4 w-px bg-white" />
    </div>
  );
}

export function Ribbon({ label, variant = 'default' }: RibbonProps) {
  const labelToDisplay = label || defaultLabel[variant];
  const defaultVariant = variant === 'default';
  const winner = variant === 'winner';
  const bestValue = variant === 'best-value';

  return (
    <div
      className={clsx('p-[0.625rem] rounded-b-lg flex', {
        ['bg-amber-400']: winner,
        ['bg-rose-500']: bestValue,
        ['text-white']: !defaultVariant,
        ['text-neutral-600 bg-gray-100']: defaultVariant,
      })}
    >
      {winner && <RibbonIcon src={winnerIcon} />}
      {bestValue && <RibbonIcon src={bestValueIcon} />}

      <Typography variant="l100" component="span">
        {labelToDisplay}
      </Typography>
    </div>
  );
}
