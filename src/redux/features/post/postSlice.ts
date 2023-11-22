/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

interface IPost {
  posts: any[];
}

const initialState: IPost = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPosts: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});
export const { loadPosts } = postSlice.actions;

export default postSlice.reducer;
