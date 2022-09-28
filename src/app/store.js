import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from '../features/motherBoardSlice'
import RAM from "../features/RAMSlice";
import HDD from "../features/HDDSlice";
import processor from '../features/processorSlice';
import cooler from '../features/coolerSlice'
import corpusSlice from "../features/corpusSlice";

export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    RAM,
    HDD,
    processor,
    cooler,
    corpusSlice,
  }
});
