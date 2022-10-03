import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import motherBoard from "../features/motherBoardSlice";
import comp from "../features/compSlice";
import ram from "../features/RAMSlice";
import hdd from "../features/HDDSlice";
import processor from "../features/processorSlice";
import cooler from "../features/coolerSlice";
import corpus from "../features/corpusSlice";

import game from '../features/gameSlice';
import power from "../features/powerUnit";
import video from "../features/videoCardSlice";
import ssd from "../features/ssdSlice";
export const store = configureStore({
  reducer: {
    application,
    motherBoard,
    ram,
    hdd,
    ssd,
    processor,
    cooler,
    corpus,
    comp,
    power,
    video,
    game
  },
  }

);
