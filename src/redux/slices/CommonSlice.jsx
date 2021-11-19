import { createSlice } from "@reduxjs/toolkit";

export const CommonSlice = createSlice({
  name: "common",
  initialState: {
    loading: true,
    inactiveFor: 0,
    title: "",
    returnTo: "",
    googleResponse: undefined,
  },
  reducers: {
    resetToInit: (state) => {
      state.googleResponse = undefined;
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setGoogleResponse: (state, { payload }) => {
      state.loading = false;
      state.googleResponse = payload;
    },
    setReturnTo: (state, { payload }) => {
      state.returnTo = payload;
    },
    reSetReturnTo: (state, { payload }) => {
      state.returnTo = undefined;
    },
    setInactiveFor: (state) => {
      state.inactiveFor = state.inactiveFor + 1;
    },
    reSetInactiveFor: (state) => {
      state.inactiveFor = 0;
    },
  },
});

export const {
  setTitle,
  setGoogleResponse,
  resetToInit,
  setReturnTo,
  reSetReturnTo,
  setInactiveFor,
  reSetInactiveFor,
} = CommonSlice.actions;
export default CommonSlice.reducer;
