import { configureStore } from "@reduxjs/toolkit";
import popularSlice from "./slices/popularSlice";
import smartphonesSlice from "./slices/smartphoneSlice";

export const store = configureStore({
  reducer: {
    popular : popularSlice,
    smartphones: smartphonesSlice,
  },
});

