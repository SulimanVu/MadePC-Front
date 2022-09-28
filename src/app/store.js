import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice";
import comp from "../features/compSlice";
import RAM from "../features/RAMSlice";
import HDD from "../features/HDDSlice";
import processor from '../features/processorSlice';
import cooler from '../features/coolerSlice'
import corpus from "../features/corpusSlice";

export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    RAM,
    HDD,
    processor,
    cooler,
    corpus,
    comp
  }
});
