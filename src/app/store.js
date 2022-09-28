import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";

export const store = configureStore({
  reducer: {
    application,
    motherBoard
  },
});
