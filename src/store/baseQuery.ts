import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apikey = process.env.NEXT_PUBLIC_API_KEY || "";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    headers: {
      apikey,
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth"],
});
