/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    registerUser: build.mutation({
      query: (data: any) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data: any) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = bookApi;
