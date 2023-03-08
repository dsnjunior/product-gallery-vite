import clsx from 'clsx';
import { Typography } from '../Typography';

import giftIcon from '../../assets/icons/tag/gift.svg';
import shippingIcon from '../../assets/icons/tag/shipping.svg';
import couponIcon from '../../assets/icons/tag/coupon.svg';

export type TagProps = {
  variant: 'gift' | 'shipping' | 'coupon';
};

const variants = {
  gift: {
    icon: giftIcon,
    text: 'Free gift',
    color: 'text-gray-400',
  },
  shipping: {
    icon: shippingIcon,
    text: 'Free shipping',
    color: 'text-gray-400',
  },
  coupon: {
    icon: couponIcon,
    text: 'Coupon',
    color: 'text-cyan-400',
  },
} as const;

export function Tag({ variant }: TagProps) {
  const { icon, text, color } = variants[variant];

  return (
    <span className="inline-flex items-center">
      <span className="mr-1 flex-shrink-0">
        <img src={icon} alt={`${text} tag icon`} />
      </span>
      <Typography variant="c100" component="span" className={clsx(color, 'whitespace-nowrap')}>
        {text}
      </Typography>
    </span>
  );
}
