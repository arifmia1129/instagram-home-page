import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  userName: string | null;
  isLoading: boolean;
}

const initialState: IUser = {
  userName: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.isLoading = true;
      state.userName = payload.userName;
    },
    toggleLoading: (state) => {
      state.isLoading = false;
    },
  },
});
export const { loginUser, toggleLoading } = userSlice.actions;

export default userSlice.reducer;
