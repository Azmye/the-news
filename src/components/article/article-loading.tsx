type Props = {
  className?: string;
};

export const ArticleLoading = ({ className }: Props = {}) => {
  return (
    <div
      className={`relative rounded-md overflow-hidden shadow-xl bg-black w-full ${className}`}
    ></div>
  );
};
