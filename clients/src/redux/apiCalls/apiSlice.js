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
      query: (data) => ({
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
      query: () => ({
        url: "profile/admin",
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
        providesTags: ["Admin"],
      }),
    }),

    createTask: builder.mutation({
      query: (data, tokenFromRedux) => ({
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
      query: (currentPage, tokenFromRedux) => ({
        url: `users/all-users?page=${currentPage}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),

    createUser: builder.mutation({
      query: (data, tokenFromRedux) => ({
        url: "users/createUser",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: "users/",
        method: "DELETE",
        body: id,

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    })
  }),
});
export const {
  useCreateAdminMutation,
  useLoginAdminMutation,
  useGetAdminProfileMutation,
  useCreateTaskMutation,
  useCreateUserMutation,
  useGetAllUsersMutation,
  useDeleteUserMutation
} = apiSlice;
