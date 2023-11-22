import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import api from "./api/apiSlice";
import postReducer from "./features/post/postSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
