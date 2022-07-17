import { createSlice } from "@reduxjs/toolkit";
let initialState = "";
const notificationSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state, action) {
      let message = action.payload;
      return message;
    },
    removeMessage(state, action) {
      return "";
    },
  },
});
export const { setMessage, removeMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
