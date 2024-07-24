import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRoot = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
