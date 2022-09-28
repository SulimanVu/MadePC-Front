import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice"

export const store = configureStore({
  reducer: {
    application,
    motherBoard
  },
});
