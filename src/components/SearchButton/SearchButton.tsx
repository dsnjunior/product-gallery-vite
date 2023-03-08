import searchIcon from '../../assets/icons/search/search.svg';
import cancelIcon from '../../assets/icons/search/cancel.svg';

export type SearchButtonProps = {
  searching: boolean;
  onClick: () => void;
};

const variants = {
  true: {
    icon: cancelIcon,
    label: 'Cancel search',
  },
  false: {
    icon: searchIcon,
    label: 'Search for anything',
  },
} as const;

export function SearchButton({ searching, onClick }: SearchButtonProps) {
  const { icon, label } = variants[`${searching}`];

  return (
    <button className="flex w-full bg-gray-50 px-3 py-2 rounded-full" onClick={onClick}>
      <img src={icon} alt={label} />
      <span className="ml-2 text-gray-500">{label}</span>
    </button>
  );
}
