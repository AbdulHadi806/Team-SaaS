import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { AdminToken } from "../utils/adminAuth";

const token = AdminToken();
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  tagTypes: ["Admin", "User", "Tasks"],
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
    getAdminProfile: builder.mutation({
      query: (token) => ({
        url: "profile/admin",
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Admin"],
    }),

    createTask: builder.mutation({
      query: (data) => ({
        url: "tasks",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
    getAllUsers: builder.mutation({
      query: (currentPage) => ({
        url: `users/all-users?page=${currentPage}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    createUser: builder.mutation({
      query: (data) => ({
        url: "users/createUser",
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
export const {
  useCreateAdminMutation,
  useLoginAdminMutation,
  useGetAdminProfileMutation,
  useCreateTaskMutation,
  useCreateUserMutation,
  useGetAllUsersMutation,
} = apiSlice;
