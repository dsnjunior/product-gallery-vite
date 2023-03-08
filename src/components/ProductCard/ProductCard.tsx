import clsx from 'clsx';
import { Button } from '../Button';
import { DiscountTag } from '../DiscountTag';
import { Tag } from '../Tag';
import { Typography } from '../Typography';

export type ProductCardProps = {
  store: string;
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  freeShipping: boolean;
  freeGift: boolean;
  coupon: boolean;
  url: string;
  disabled?: boolean;
};

export function ProductCard({
  store,
  image,
  title,
  description,
  price,
  discount,
  freeShipping,
  freeGift,
  coupon,
  url,
  disabled,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl px-5 py-6 h-full border border-gray-200 text-left">
      <div className={clsx({ ['opacity-50']: disabled })}>
        <div className="px-3 flex items-center justify-center h-32 mb-6">
          <img src={image} alt={`Product ${title}`} className="w-full h-full object-contain" />
        </div>
        <Typography variant="h100" className="line-clamp-2" title>
          {title}
        </Typography>
        <Typography variant="p300" className="line-clamp-2 text-ellipsis mt-3 text-gray-500" title>
          {description}
        </Typography>
        <div className="mt-6 flex items-center">
          <Typography variant="l100" weight="700">
            ${price}+
          </Typography>
          {!!discount && (
            <span className="ml-2">
              <DiscountTag discount={discount} />
            </span>
          )}
        </div>
        <div className="w-full h-px bg-gray-200 my-3 " />
        <div className="mb-6 flex space-x-2">
          {coupon && <Tag variant="coupon" />}
          {freeShipping && <Tag variant="shipping" />}
          {freeGift && <Tag variant="gift" />}
        </div>
      </div>
      <div>
        <Button href={url} otherDomain>
          View Deal
        </Button>
      </div>
    </div>
  );
}
