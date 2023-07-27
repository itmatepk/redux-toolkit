// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["hello", "userId"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).productArray[0].name
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `users`,
      transformResponse: (res: any, meta, arg) => {
        if (arg) return res.find((val: any) => val.username == arg);
        return res;
      },
      providesTags: ["hello"],
    }),
    getPostById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["userId"],
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["hello", "userId"],
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
