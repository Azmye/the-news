import { createSlice } from "@reduxjs/toolkit";
import { IArticleState } from "../../../types/articles";

const initialState: IArticleState = {
  data: [],
  searchQuery: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.data.push({ ...action.payload, id: Date.now() });
    },
    removeArticle: (state, action) => {
      state.data = state.data.filter(
        (article) => article.id !== action.payload.id
      );
    },
    filterArticle: (state, action) => {
      state.data = state.data.filter(
        (article) =>
          article.author === action.payload.query ||
          article.title === action.payload.query ||
          article.content === action.payload.query
      );
    },
    searchArticle: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addArticle, removeArticle, filterArticle, searchArticle } =
  articleSlice.actions;

export default articleSlice.reducer;
