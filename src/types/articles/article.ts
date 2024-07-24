export type source = {
  id: string;
  name: string;
};

export interface IArticle {
  id?: number;
  source: source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleState {
  data: IArticle[];
  searchQuery: string;
}
