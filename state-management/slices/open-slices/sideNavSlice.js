import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:false,
};

const sideNavSlice = createSlice({
  name: 'sideNavOpen',
  initialState,
  reducers: {
    show(state, action) {
        state.open = action.payload;
    }
  }
})

export const { show } = sideNavSlice.actions;
export default sideNavSlice.reducer;