import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:false,
};

const showModelSlice = createSlice({
  name: 'showModel',
  initialState,
  reducers: {
    show(state, action) {
        state.open = action.payload;
    }
  }
})

export const { show } = showModelSlice.actions;
export default showModelSlice.reducer;