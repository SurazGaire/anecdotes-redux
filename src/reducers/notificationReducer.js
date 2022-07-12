import { createSlice } from "@reduxjs/toolkit";
let initialState = "This is my first notification";
const notificationSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    notifyMessage(state = initialState, action) {
      let message = action.payload;
      return (state.message = message);
    },
  },
});
export const { notifyMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
