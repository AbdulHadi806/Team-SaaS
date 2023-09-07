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
    getAdminProfile: builder.mutation({
      query: (tokenTest) => ({
        url: "profile/admin",
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${tokenTest}`,
        },
      }),
      providesTags: ["Admin"],
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
    createUser: builder.mutation({
      query: ({ user, tokenTest }) => ({
        url: "users/createUser",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${tokenTest}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: ({ _id, tokenTest }) => ({
        url: "users/",
        method: "DELETE",
        body: { _id },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${tokenTest}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: ({currentPage, tokenTest}) =>({
        url: `users/all-users?page=${currentPage}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${tokenTest}`,
        },
      }),
      
      providesTags: ['User', "Admin"],
    }),
    getAllTasks: builder.query({
      query: ( testToken) =>({
        url: `tasks/all-tasks`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${testToken}`,
        },
      }),
      
      providesTags: ['Tasks', "Admin"],
    }),
    deleteProject: builder.mutation({
      query: ( assigned_to_role ) => ({
        url: `tasks/all-tasks/specific-tasks`,
        method: "DELETE",
        body: assigned_to_role,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ task_id, testToken }) => ({
        url: `tasks/update-task`,
        method: "PATCH",
        body: {task_id} ,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${testToken}`,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});
export const {
  useCreateAdminMutation,
  useLoginAdminMutation,
  useGetAdminProfileMutation,
  useCreateTaskMutation,
  useCreateUserMutation,
  useGetAllTasksQuery,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useDeleteProjectMutation,
  useUpdateTaskMutation
} = apiSlice;
