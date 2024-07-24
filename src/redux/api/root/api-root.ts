import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export const apiRoot = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, // Use proxy path
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", `${import.meta.env.VITE_APP_API_KEY}`);
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
