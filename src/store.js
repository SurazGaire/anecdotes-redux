import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";
import anecdoteService from "./services/anecdotes";
import { setAnecdotes } from "./reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    message: notificationReducer,
    filter: filterReducer,
  },
});

anecdoteService
  .getAll()
  .then((anecdotes) => store.dispatch(setAnecdotes(anecdotes)));

export default store;
