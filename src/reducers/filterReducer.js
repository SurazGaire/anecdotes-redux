import { createSlice } from "@reduxjs/toolkit";
let initialState = [];
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchResult(state, action) {
      let searchValue = action.payload.content;
      let anecdotes = action.payload.state;
      let filteredArray = anecdotes.filter((anecdote) =>
        anecdote.content.includes(searchValue)
      );
      if (filteredArray.length >= 1) {
        return filteredArray;
      }
    },
  },
});
export const { searchResult } = filterSlice.actions;
export default filterSlice.reducer;
