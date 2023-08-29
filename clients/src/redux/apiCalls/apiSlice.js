import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdminToken } from "../utils/adminAuth";

const token = AdminToken();
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

    getAllUsers: builder.mutation({
      query: (token) => ({
        url: "users/all-users",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const {
  useCreateAdminMutation,
  useLoginAdminMutation,
  useGetAdminProfileMutation,
  useCreateUserMutation,
useGetAllUsersMutation,
} = apiSlice;
