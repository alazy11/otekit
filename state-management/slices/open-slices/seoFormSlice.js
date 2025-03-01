import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:false,
    process:'add',
    data:{}
};



const seoFormSlice = createSlice({
  name: 'seoForm',
  initialState,
  reducers: {
    show(state, action) {
        state.open = action.payload;
    },
    setEditData(state, action) {
      state.data = action.payload;
    },
    setProcess(state, action) {
      state.process = action.payload;
    }
  }
})

export const { show,setEditData,setProcess } = seoFormSlice.actions;
export default seoFormSlice.reducer;