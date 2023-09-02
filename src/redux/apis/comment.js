import { api } from "./api";

export const comment = api.injectEndpoints({
  endpoints: (build) => ({
    getCommentsByPost: build.query({
      query: (id) => `comments/` + id,
      providesTags: (_result, _err, id) => ["Comment", { type: "Comment", id }],
    }),
    addComment: build.mutation({
      query(body) {
        return {
          url: `comments/`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { useGetCommentsByPostQuery, useAddCommentMutation } = comment;
