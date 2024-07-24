type Props = {
  className?: string;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  className,
  endIcon,
  isLoading,
  value,
  onChange,
}: Props) => {
  return (
    <div className={`${className} relative w-full ring-1 p-2 rounded-md `}>
      <input
        className="w-full outline-0 "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      {endIcon && (
        <span className="absolute top-3 right-2 text-xl text-blue-500 cursor-pointer hover:text-blue-600">
          {isLoading ? <span className="animate-spin">...</span> : endIcon}
        </span>
      )}
    </div>
  );
};
