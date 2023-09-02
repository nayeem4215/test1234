import { api } from "./api";

export const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReviewsByCourse: build.query({
      query: (id) => `reviews/` + id,
      providesTags: (_result, _err, id) => [{ type: "Review", id }],
    }),
    addReview: build.mutation({
      query(body) {
        return {
          url: `reviews`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Review"],
    }),
    getReview: build.query({
      query: (id) => `reviews/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Review", id }],
    }),
    updateReview: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `reviews/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (review) => [{ type: "Review", id: review?.id }],
    }),
    deletReview: build.mutation({
      query(id) {
        return {
          url: `reviews/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (review) => [{ type: "Review", id: review?.id }],
    }),
  }),
});

export const {} = reviewApi;
