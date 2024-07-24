type Props = {
  className?: string;
};

export const ArticleLoading = ({ className }: Props = {}) => {
  return (
    <div
      className={`animate-pulse relative rounded-md overflow-hidden shadow-xl bg-gray-300 w-full ${className}`}
    ></div>
  );
};
