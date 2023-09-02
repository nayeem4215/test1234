import { api } from "./api";

export const uploadApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadImages: builder.mutation({
      query: (body) => ({
        url: "uploads/uploadImages",
        method: "POST",
        body,
      }),
    }),
    uploadPdfs: builder.mutation({
      query: (body) => ({
        url: "uploads/uploadPdfs",
        method: "POST",
        body,
      }),
    }),
    uplaodVideos: builder.mutation({
      query: (body) => ({
        url: "uploads/uploadVideos",
        method: "POST",

        body,
      }),
    }),
  }),
});

export const { useUploadImagesMutation } = uploadApi;
