import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body) => ({
        url: "users/signin",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "users/signup",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query({
      query: (id) => `users/profile`,
      providesTags: (_result, _err, id) => [{ type: "Posts", id }],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "users/profile",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useSigninMutation,
  useSignupMutation,
} = userApi;
