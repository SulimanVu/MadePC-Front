import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from '../features/motherBoardSlice'
import RAM from "../features/RAMSlice";
import HDD from "../features/HDDSlice"


export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    RAM,
    HDD
  },
});
