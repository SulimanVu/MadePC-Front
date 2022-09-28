import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice";
import comp from "../features/compSlice";

export const store = configureStore({
  reducer: {
    application,
    motherBoard,
  },
});
