import clsx from 'clsx';

export type TypographyProps = {
  variant?: 'h600' | 'h500' | 'h400' | 'h300' | 'h200' | 'h100' | 'p300' | 'p200' | 'c200' | 'c100' | 'l100';
  weight?: '400' | '500' | '600' | '700';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  className?: string;
  component?: React.ElementType;
  children: React.ReactNode;
  title?: true | string;
};

const elements = {
  h600: 'h1',
  h500: 'h2',
  h400: 'h3',
  h300: 'h4',
  h200: 'h5',
  h100: 'h6',
  p300: 'p',
  p200: 'p',
  c200: 'p',
  c100: 'p',
  l100: 'label',
} as const;

const variants = {
  h600: 'text-h600',
  h500: 'text-h500',
  h400: 'text-h400',
  h300: 'text-h300',
  h200: 'text-h200',
  h100: 'text-h100',
  p300: 'text-p300',
  p200: 'text-p200',
  c200: 'text-c200',
  c100: 'text-c100',
  l100: 'text-l100',
} as const;

const weights = {
  400: 'font-400',
  500: 'font-500',
  600: 'font-600',
  700: 'font-700',
} as const;

const transforms = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
} as const;

export function Typography({
  variant = 'p300',
  weight,
  transform,
  className,
  children,
  component,
  title,
}: TypographyProps) {
  const Element = component ?? elements[variant];

  return (
    <Element
      className={clsx(
        variants[variant],
        weight ? weights[weight] : '',
        transform ? transforms[transform] : '',
        className,
      )}
      title={typeof title === 'string' || typeof title === 'undefined' ? title : children}
    >
      {children}
    </Element>
  );
}
