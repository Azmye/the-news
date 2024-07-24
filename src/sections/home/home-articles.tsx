import {
  addArticle,
  dispatch,
  useGetArticlesQuery,
  useSelector,
} from "../../redux";
import { Article, ArticleLoading } from "../../components/article";
import { ErrorPage } from "../../pages";
import { useMemo } from "react";
import { IArticle } from "../../types";

export const HomeArticles = () => {
  const { searchQuery } = useSelector((state) => state.article);
  const { data, isLoading, error, isFetching } = useGetArticlesQuery({
    domains: "bbc.co.uk",
    q: searchQuery,
  });

  const { data: bookmarks } = useSelector((state) => state.article);

  console.log(bookmarks);

  const filteredArticles = useMemo(() => {
    return data?.articles.filter(
      (article) =>
        article.title !== null &&
        article.urlToImage !== null &&
        article.url !== null &&
        article.author !== null
    );
  }, [data]);

  const handleSaveArticle = (data: IArticle) => {
    dispatch(addArticle({ id: bookmarks.length + 1, ...data }));

    window.open(data.url, "_blank");
  };

  if (isLoading || isFetching) {
    return (
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ArticleLoading
            key={index}
            className={` ${
              index % 5 === 0 && index === 0
                ? "col-span-2 row-span-2 md:h-[500px]"
                : ""
            } ${
              index % 7 === 0 && index != 0
                ? "col-span-2 row-span-2 md:h-[500px]"
                : ""
            }`}
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
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
