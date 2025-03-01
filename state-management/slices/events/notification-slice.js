import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  type: "success",
  message:""
};

const showNotificationSlice = createSlice({
  name: 'showNotification',
  initialState,
  reducers: {
    show(state, action) {
      state.open = action.payload;
    },
    setNotificationType(state, action) {
      state.type = action.payload;
    },
    setNotificationMessage(state, action) {
      state.message = action.payload;
    }
  }
})

export const { show, setNotificationType,setNotificationMessage } = showNotificationSlice.actions;
export default showNotificationSlice.reducer;