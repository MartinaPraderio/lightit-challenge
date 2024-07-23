import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseService = createApi({
  reducerPath: "baseService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_BASE_URL}/`,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
