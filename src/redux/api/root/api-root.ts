import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRoot = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", `${import.meta.env.VITE_APP_API_KEY}`);
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
