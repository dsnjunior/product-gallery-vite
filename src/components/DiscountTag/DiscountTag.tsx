import { Typography } from '../Typography';

export type DiscountTagProps = {
  discount: number;
};

export function DiscountTag({ discount }: DiscountTagProps) {
  return (
    <Typography
      variant="c100"
      weight="500"
      component="span"
      className="border shadow-border border-current rounded text-neutral-700 px-2 h-6 inline-flex items-center"
    >
      {discount}% Off
    </Typography>
  );
}
