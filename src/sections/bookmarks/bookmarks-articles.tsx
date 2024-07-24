import { useSelector } from "../../redux";
import { Article } from "../../components/article";
import { useMemo } from "react";
import { IArticle } from "../../types";

export const BookmarksArticles = () => {
  const { data: bookmarks } = useSelector((state) => state.article);

  const filteredArticles = useMemo(() => {
    return bookmarks.filter(
      (article) =>
        article.title !== null &&
        article.urlToImage !== null &&
        article.url !== null &&
        article.author !== null
    );
  }, [bookmarks]);

  const handleSaveArticle = (data: IArticle) => {
    window.open(data.url, "_blank");
  };

  if (bookmarks.length === 0) {
    return <div>Bookmarks is empty!</div>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      {filteredArticles?.map((article, index) => (
        <Article
          onClick={() => handleSaveArticle(article)}
          key={index}
          className={` ${
            index % 5 === 0 && index === 0 ? "col-span-2 row-span-2" : ""
          } ${index % 7 === 0 && index != 0 ? "col-span-2 row-span-2" : ""}`}
          article={article}
        />
      ))}
    </div>
  );
};
