import { api } from "./api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: (q = "") => `posts?${q}`,
      providesTags: (_result, _err, id) => [{ type: "Post", id }],
    }),
    addPost: build.mutation({
      query(body) {
        return {
          url: `posts`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Post"],
    }),
    getPost: build.query({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Post", id }],
    }),
    updatePost: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (post) => [{ type: "Post", id: post?.id }],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (post) => [{ type: "Post", id: post?.id }],
    }),
  }),
});

export const { useAddPostMutation, useGetPostQuery, useGetPostsQuery } =
  postApi;
