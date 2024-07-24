import { combineReducers } from "@reduxjs/toolkit";
import articleReducer from "./slices/article/articles";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiRoot } from "./api";

const articlePersisConfig = {
  key: "article",
  storage,
  whitelist: ["data"],
  keyPrefix: "redux-",
};

export const rootReducer = combineReducers({
  article: persistReducer(articlePersisConfig, articleReducer),

  [apiRoot.reducerPath]: apiRoot.reducer,
});
