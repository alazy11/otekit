import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:false,
};

const seoFormSlice = createSlice({
  name: 'seoForm',
  initialState,
  reducers: {
    show(state, action) {
        state.open = action.payload;
    }
  }
})

export const { show } = seoFormSlice.actions;
export default seoFormSlice.reducer;