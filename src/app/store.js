import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice";
import corpusSlice from "../features/corpusSlice";

export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    corpusSlice,
  },
});
