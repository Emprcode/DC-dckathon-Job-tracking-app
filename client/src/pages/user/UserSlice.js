import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state, action) => {
        state.isLoading = true;
      },
    setUser: (state, action) => {
      state.user = action.payload;
    },
   
  },
});

const { reducer, actions } = UserSlice;

export const { setUser, unSetUser } = actions;

export default reducer;