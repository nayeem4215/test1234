import { api } from "./api";

export const bikeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBikes: build.query({
      query: () => `bikes`,
      providesTags: (_result, _err, id) => [{ type: "Bike", id }],
    }),
    addBike: build.mutation({
      query(body) {
        return {
          url: `bikes`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Bike"],
    }),
    getBike: build.query({
      query: (id) => `bikes/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Bike", id }],
    }),
    updateBike: build.mutation({
      query(data) {
        const { _id, ...body } = data;
        return {
          url: `bikes/${_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: () => ["Bike"],
    }),
    deleteBike: build.mutation({
      query(id) {
        return {
          url: `bikes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: () => ["Bike"],
    }),
  }),
});

export const {} = bikeApi;
