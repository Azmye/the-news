import { IArticleResponse } from "../../../types/articles";
import { IArticleParamsEverything } from "../../../types/articles/articles-request";
import { apiRoot } from "../root";

export const apiArticle = apiRoot.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<IArticleResponse, IArticleParamsEverything>({
      query: ({
        sources = "",
        domains = "",
        excludeDomains = "",
        from = "",
        languange = "",
        q = "",
        sortBy = "",
        to = "",
        pageSize = "100",
      }) => ({
        url: `/everything?sources=${sources}&domains=${domains}&excludeDomains=${excludeDomains}&from=${from}&to=${to}&languange=${languange}&q=${q}&sortBy=${sortBy}&pageSize=${pageSize}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useLazyGetArticlesQuery } = apiArticle;
