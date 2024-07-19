import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.API_BASE_URL}/`,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const BaseService = createApi({
  reducerPath: "baseService",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
