import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:false,
    dataUrl:"",
    data:{}
};

const showModelSlice = createSlice({
  name: 'showModel',
  initialState,
  reducers: {
    show(state, action) {
        state.open = action.payload;
    },
    setData(state, action) {
        state.data = action.payload;
    },
    setDataUrl(state, action) {
        state.dataUrl = action.payload;
    }
  }
})

export const { show,setDataUrl,setData } = showModelSlice.actions;
export default showModelSlice.reducer;