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
    addLike: (state, { payload }) => {
      const post = state.posts.find((post) => post.id === payload.id);
      post.likes = post.likes + 1;
    },
  },
});
export const { loadPosts, addLike } = postSlice.actions;

export default postSlice.reducer;
