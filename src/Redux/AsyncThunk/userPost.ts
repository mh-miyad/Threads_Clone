// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    userPost: builder.query({
      query: () => ({
        url: `/Post`, // Append email as query parameter
        method: "GET",
      }),
    }),
    userAllPost: builder.mutation({
      query: (email) => ({
        url: `/Post/userPost`, // Append email as query parameter
        method: "POST",
        body: email,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserPostQuery, useUserAllPostMutation } = postApi;
