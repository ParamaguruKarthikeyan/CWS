import CommonSlice from "./slices/CommonSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    common: CommonSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
