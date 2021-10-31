import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      if (!action.payload) {
        state.notification = null;
      } else {
        const { type, title, messages } = action.payload;
        state.notification = { type, title, messages };
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
