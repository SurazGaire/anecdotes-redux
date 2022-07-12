import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    message: notificationReducer,
  },
});

export default store;
