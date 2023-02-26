import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type IBlog = {
    userId: string;
    id: string;
    title: string;
    body: string;
  };

export const blogApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    // Query: Get All blog
    getBlogs: builder.query<IBlog ,void>({
      query: () => ``,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Blogs' as const,
                id,
              })),
              { type: 'Blogs', id: 'LIST' },
            ]
          : [{ type: 'Blogs', id: 'LIST' }],
    }),
     // Query: Get a single blog
     getBlogById: builder.query<IBlog, string>({
        query(id) {
          return `${id}`;
        },
        providesTags: (result, error, id) => [{ type: 'Blogs', id }],
      }),
    }),
});

// Export hooks for usage in functional components
export const {
     useGetBlogsQuery,
     useGetBlogByIdQuery,
  util: { getRunningQueriesThunk },
} = blogApi;

// export endpoints for use in SSR
export const { getBlogs, getBlogById } = blogApi.endpoints;