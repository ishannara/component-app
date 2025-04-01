import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../react-redux/slice/addSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
