import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import comment from "../modules/commentSlice";
import music from "../modules/MusicSlice";
import board from "../modules/boardSlice";

const store = configureStore({
  reducer: {
    comments,
    comment,
    music,
    board,
  },
});

export default store;
