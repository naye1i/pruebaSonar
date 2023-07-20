import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../feature/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: tasksReducer,
  },
});
