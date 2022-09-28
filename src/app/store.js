import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice";
import processor from '../features/processorSlice';
import cooler from '../features/coolerSlice'

export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    processor,
    cooler
  }
});
