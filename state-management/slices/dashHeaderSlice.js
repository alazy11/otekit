import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title:''
};

const dashHeaderSlice = createSlice({
  name: 'dashHeader',
  initialState,
  reducers: {
    setTitle(state, action) {
        state.title = action.payload;
    },
  }
})

export const { setTitle } = dashHeaderSlice.actions;
export default dashHeaderSlice.reducer;