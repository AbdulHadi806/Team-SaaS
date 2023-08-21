import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  tagTypes: ["Admin", "User"],
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "registration/admins",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),

      invalidatesTags: ["Admin"],
    }),
    loginAdmin: builder.mutation({
      query: (data, token) => ({
        url: "registration/loginAdmin",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),

      invalidatesTags: ["Admin"],
    }),
  }),
});
export const { useCreateAdminMutation, useLoginAdminMutation } = apiSlice;
