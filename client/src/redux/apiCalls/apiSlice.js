import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    tagTypes: ["Admin", "User"],
    endpoints: (builder) => ({
        createAdmin: builder.mutation({
            query: (todoData) => ({
                url: 'registration/admins',
                method: 'POST',
                body: {
                    todoData
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }),

            invalidatesTags: ['Admin']
        }),
    }),
})