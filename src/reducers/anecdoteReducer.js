import { createSlice } from "@reduxjs/toolkit";

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE_VOTES": {
//       const id = action.data.id;
//       const anecdoteToChange = state.find((n) => n.id === id);
//       const changedToAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1,
//       };
//       let finalArray = state.map((anecdote) =>
//         anecdote.id !== id ? anecdote : changedToAnecdote
//       );
//       return finalArray.sort((a, b) => b.votes - a.votes);
//     }
//     case "NEW_ANECDOTE": {
//       console.log(console.log(action.data));
//       return [...state, action.data];
//     }
//     default:
//       return state;
//   }
// };

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    addVotes(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedToAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      console.log(changedToAnecdote);
      let finalArray = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedToAnecdote
      );
      return finalArray.sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, addVotes, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
