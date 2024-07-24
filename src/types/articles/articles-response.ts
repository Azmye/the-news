import { IArticle } from "./article";

export interface IArticleResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
