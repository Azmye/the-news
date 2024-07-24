import { format } from "date-fns";
import { id } from "date-fns/locale";
import { IArticle } from "../../types/articles";

type Props = {
  article: IArticle;
  className?: string;
  onClick?: () => void;
};

export const Article = ({ article, className, onClick }: Props) => {
  const cardShrink = className?.includes("col-span-2 row-span-2");
  return (
    <div
      onClick={onClick}
      className={`relative rounded-md overflow-hidden shadow-xl cursor-pointer ${className}`}
    >
      <img src={article.urlToImage} className="w-full object-cover" />
      <div className="flex items-end">
        <div className="px-5 py-2 w-full">
          <p
            className={`${
              !cardShrink ? "text-sm mb-1" : "text-2xl"
            } font-semibold text-black/80}`}
          >
            {article.title}
          </p>
          {cardShrink && (
            <p className="text-md text-slate-900">{article.description}</p>
          )}
          <p
            className={`${
              cardShrink ? "text-md" : "text-xs"
            } text-end text-slate-900`}
          >
            Author by {article.author}
          </p>
          <p className={`${cardShrink ? "text-md" : "text-xs"} text-end`}>
            {article.publishedAt &&
              format(new Date(article.publishedAt), "eee, dd MMMM yyyy HH.mm", {
                locale: id,
              })}
          </p>
        </div>
      </div>
    </div>
  );
};
